// Monster interface defines the attributes of a monster in the game.
// It includes properties such as name, attack, defense, speed, hp, and image_url
export interface Monster {
    name: string;
    attack: number;
    defense: number;
    speed: number;
    hp: number;
    image_url: string;

    attackEnemy(enemy: Monster, verbose?: boolean): void;
    takeDamage(damage: number): void;
    isAlive(): boolean;
}

// MonsterEntity class implements the IMonster interface and provides methods for attacking, taking damage, and checking if the monster is alive.
export class MonsterEntity implements Monster {
  name: string;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
  image_url: string;

  constructor(name: string, attack: number, defense: number, speed: number, hp: number, image_url: string) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.hp = hp;
    this.image_url = image_url;
  }

  attackEnemy(enemy: Monster, verbose: boolean = false): void {
    const damage = Math.max(1, this.attack - enemy.defense);
    if (verbose) {
      console.log(`💥 ${this.name} deals ${damage} damage to ${enemy.name}`);
    }
    enemy.takeDamage(damage);
  }

  takeDamage(damage: number): void {
    this.hp = Math.max(0, this.hp - damage);
  }

  isAlive(): boolean {
    return this.hp > 0;
  }
}
