// ******** Adding character experience ********
const aurora = { 
    name: "Aurora", 
    health: 150, 
    strength: 25,
    xp: 0,
  
    // Return the character description
    describe() {
        console.log(`${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`);
    }
};

// Aurora is harmed by an arrow
aurora.health -= 20;
// Aurora equips a strength necklace
aurora.strength += 10;
// Aurora learn a new skill
aurora.xp += 15;

aurora.describe();

// ******** Modeling a dog ********
const dog = {
    name: "Fang",
    species: "boarhound",
    size: 75,
    bark: () => "Grrr! Grrr!"
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// ******** Modeling a circle ********
const r = Number(prompt("Enter the circle radius:"));

const circle = {
    radius: r,
    circumference() { return 2 * Math.PI * this.radius; },
    area() { return Math.PI * this.radius ** 2; }
};

console.log(`Its circumference is ${circle.circumference()}`); 
console.log(`Its area is ${circle.area()}`);

// ******** Modeling a bank account ********
const account = {
    name: "Alex",
    balance: 0,
    credit(value) {
        this.balance += value;
    },
    describe() {
        console.log(`"owner: ${this.name}, balance ${this.balance}`)
    }
};

account.describe();
account.credit(250);
account.credit(-80);
account.describe();