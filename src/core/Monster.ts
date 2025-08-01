// Monster interface defines the attributes of a monster in the game.
// It includes properties such as name, attack, defense, speed, hp, and image_url
// Also include methods to define the monster's abilities
export interface Monster {
  identifier: string;
  name: string;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
  image_url: string;

  attackEnemy(enemy: Monster, logger: (msg: string) => void): void;
  takeDamage(damage: number): void;
  isAlive(): boolean;
}

// MonsterAttributes defines only the monster attributes
export type MonsterAttributes = Omit<Monster, 'attackEnemy' | 'takeDamage' | 'isAlive'>;

// MonsterEntity class implements the IMonster interface and provides methods for attacking, taking damage, and checking if the monster is alive.
export class MonsterEntity implements Monster {
  identifier: string;
  name: string;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
  image_url: string;

  constructor(
    identifier: string,
    name: string,
    attack: number,
    defense: number,
    speed: number,
    hp: number,
    image_url: string,
  ) {
    this.identifier = identifier;
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.hp = hp;
    this.image_url = image_url;
  }

  attackEnemy(enemy: Monster, logger: (msg: string) => void): void {
    const damage = Math.max(1, this.attack - enemy.defense);
    logger(`💥 ${this.name} deals ${damage} damage to ${enemy.name}`);

    enemy.takeDamage(damage);
  }

  takeDamage(damage: number): void {
    this.hp = Math.max(0, this.hp - damage);
  }

  isAlive(): boolean {
    return this.hp > 0;
  }
}
