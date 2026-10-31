class Copyable {
    clone() {
    throw new Error("clone() metodi yozilishi kerak!");
    }
}

class GameCharacter extends Copyable {
    constructor(id, name, level, weapon) {
    super();
    this.id = id;
    this.name = name;
    this.level = level;
    this.weapon = weapon;
    }

    clone() {
    return new GameCharacter(this.id, this.name, this.level, this.weapon);
    }

    getId() {
    return this.id;
    }

    setId(id) {
    this.id = id;
    }

    getName() {
    return this.name;
    }

    setName(name) {
    this.name = name;
    }

    getLevel() {
    return this.level;
    }

    setLevel(level) {
    this.level = level;
    }

    getWeapon() {
    return this.weapon;
    }

    setWeapon(weapon) {
    this.weapon = weapon;
    }

    toString() {
    return `ID: ${this.id}, Name: ${this.name}, Level: ${this.level}, Weapon: ${this.weapon}`;
    }
}

class CharacterFactory {
    constructor(character) {
    this.character = character;
    }

    setCharacter(character) {
    this.character = character;
    }

    cloneCharacter() {
    return this.character.clone();
    }
}

class GameRunner {
    static main() {
    const original = new GameCharacter(1, "Warrior", 10, "Sword");
    const factory = new CharacterFactory(original);
    const clone1 = factory.cloneCharacter();
    const clone2 = factory.cloneCharacter();

    clone1.setId(2);
    clone1.setName("Archer");
    clone1.setLevel(15);
    clone1.setWeapon("Bow");

    clone2.setId(3);
    clone2.setName("Mage");
    clone2.setLevel(20);
    clone2.setWeapon("Staff");

    console.log("Original:", original.toString());
    console.log("Clone 1:", clone1.toString());
    console.log("Clone 2:", clone2.toString());

    console.log("Original == Clone 1:", original == clone1);
    console.log("Original == Clone 2:", original == clone2);
    console.log("Clone 1 == Clone 2:", clone1 == clone2);
    }
}

GameRunner.main();
