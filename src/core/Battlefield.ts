import type { Monster } from './Monster';

import { sleep } from '@/lib/utils';

// Battlefield interface defines the structure of a battle between two monsters.
// It includes properties for the two monsters, the current turn, and the maximum number of turns
// It also includes methods to start the battle, proceed to the next turn, determine the winner
// and check if the battle is over.
// The battlefield is responsible for managing the flow of the battle, including turn order and victory conditions
// It does not handle the actual combat logic, which is managed by the Monster class.
export interface Battlefield {
  monster1: Monster;
  monster2: Monster;
  turn: number;
  maxTurns: number;

  startBattle(): void;
  nextTurn(): void;
  determineWinner(): Monster | null;
  isBattleOver(): boolean;
  logger: (msg: string) => void;
}

// BattlefieldEntity class implements the Battlefield interface and provides methods for starting the battle,
// proceeding to the next turn, determining the winner, and checking if the battle is over.
export class BattlefieldEntity implements Battlefield {
  monster1: Monster;
  monster2: Monster;
  turn = 0;
  maxTurns = 100;
  logger: (msg: string) => void;

  constructor(monster1: Monster, monster2: Monster, logger: (msg: string) => void) {
    this.monster1 = monster1;
    this.monster2 = monster2;
    this.logger = logger;
  }

  async startBattle(): Promise<void> {
    this.logger(`🏁 Battle Start: ${this.monster1.name} vs ${this.monster2.name}\n`);

    while (!this.isBattleOver() && this.turn < this.maxTurns) {
      await this.nextTurn();
    }

    const winner = this.determineWinner();
    if (winner) {
      this.logger(`\n🏆 Battle Over: Winner is ${winner.name} with ${winner.hp} HP remaining!`);
    } else {
      this.logger(`\n⚔️ Battle Over: It's a draw! Both monsters are defeated.`);
    }
  }

  async nextTurn(): Promise<void> {
    const round = Math.floor(this.turn / 2) + 1;
    this.logger(`🔄 Round ${round}`);
    await sleep(400);

    const [first, second] = this.getTurnOrder();

    this.logger(`➡️ ${first.name} attacks ${second.name}`);
    await sleep(500);
    first.attackEnemy(second, this.logger);
    this.logger(`🩸 ${second.name} HP: ${second.hp}`);
    await sleep(500);
    this.turn++;

    if (!second.isAlive()) return;

    this.logger(`➡️ ${second.name} counter-attacks ${first.name}`);
    await sleep(500);
    second.attackEnemy(first, this.logger);
    this.logger(`🩸 ${first.name} HP: ${first.hp}`);
    await sleep(500);
    this.turn++;

    this.logger('');
  }

  determineWinner(): Monster | null {
    if (!this.monster1.isAlive() && !this.monster2.isAlive()) return null;
    if (this.monster1.isAlive()) return this.monster1;
    if (this.monster2.isAlive()) return this.monster2;
    return null;
  }

  isBattleOver(): boolean {
    return !this.monster1.isAlive() || !this.monster2.isAlive();
  }

  private getTurnOrder(): [Monster, Monster] {
    if (this.monster1.speed > this.monster2.speed) return [this.monster1, this.monster2];
    if (this.monster2.speed > this.monster1.speed) return [this.monster2, this.monster1];
    return this.monster1.attack >= this.monster2.attack
      ? [this.monster1, this.monster2]
      : [this.monster2, this.monster1];
  }
}
