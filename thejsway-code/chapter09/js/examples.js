// JavaScript code goes here
// class Character {
//     constructor(name, health, strength) {
//         this.name = name;
//         this.health = health;
//         this.strength = strength;
//         this.xp = 0; // XP is always zero for new characters
//     }
//     // Return the character description
//     describe() {
//         return `${this.name} has ${this.health} health points, ${this
//             .strength} as strength and ${this.xp} XP points`;
//     }
// }

// const aurora = new Character("Aurora", 150, 25);
// const glacius = new Character("Glacius", 130, 30);
// // Aurora is harmed by an arrow
// aurora.health -= 20;
// // Aurora gains a strength necklace
// aurora.strength += 10;
// // Aurora learns a new skill
// aurora.xp += 15;
// console.log(aurora.describe());
// console.log(glacius.describe());

// const SomeObject = {
//     id: 2
// };
// // Create sample using SomeObject as a prototype
// const sample = Object.create(SomeObject);
// console.log(sample.id); // 2

// ******* Dogs *******
// class Dog {
//     constructor(name, species, size) {
//         this.name = name;
//         this.species = species;
//         this.size = size;
//     }
//     bark() {
//         if (this.size > 60)
//             return "Grrr! Grrr!";
//         return "Woof! Woof!"
//     }
// }

// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// ******* Character inventory *******
class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;    // XP is always zero for new characters
        this.gold = 10; // gold is always ten for new characters
        this.key = 1;   // key is always one for new characters
    }
    // Attack a target
    attack(target) {
        if (this.health > 0) {
            const damage = this.strength;
            console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`);
            target.health -= damage;
            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} health points left`);
            } else {
                target.health = 0;
                const bonusXP = 10;
                console.log(`${this.name} eliminated ${target
                    .name} and wins ${bonusXP} experience points, ${target
                    .gold} gold and ${target.key} key(s)`);
                this.xp += bonusXP;
                this.gold += target.gold;
                this.key += target.key;
            }
        } else {
            console.log(`${this.name} can't attack (they've been eliminated)`);
        }
    }
    // Return the character description
    describe() {
        return `${this.name} has ${this.health} health points, ${this
            .strength} as strength, ${this.xp} XP points, ${this.gold} golds and ${this
            .key} key(s)`;
    }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);
console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);
monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);
console.log(aurora.describe());
console.log(glacius.describe());

// ******* Account list *******
class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    credit = (value) => this.balance += value;
    describe() {
        console.log(`owner: ${this.name}, balance: ${this.balance}`);
    }
}

const acc = [new Account("Sean"), new Account("Brad"), new Account("Georges")]
acc.forEach(p => {
    p.credit(1000);
    p.describe();
});