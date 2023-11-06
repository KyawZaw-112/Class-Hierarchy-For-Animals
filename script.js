class Animal {
	// Your code here
	constructor(name, age, species) {
		this.name = name;
		this.age = age;
		this.species = species;
	}

	eat() {
		console.log(`The ${this.species} named ${this.name} is eating`);
	}

	sleep() {
		console.log(`The ${this.species} named ${this.name} is sleeping`);
	}

	reproduce() {
		console.log(`The ${this.species} named ${this.name} is reproducing`);
	}
}

// Create the subclasses here

class Dog extends Animal {
	bark() {
		console.log(`The dog named ${this.name} is barking.`);
	}
}

class Cat extends Animal {
	meow() {
		console.log(`The cat named ${this.name} is meowing.`);
	}
}

class Bird extends Animal {
	fly() {
		console.log(`The Bird named ${this.name} is flying.`);
	}
}

class Fish extends Animal {
	swim() {
		console.log(`The Fish named ${this.name} is swimming.`);
	}
}

const fido = new Dog("Fido", 5, "Golden Retriever");
const felix = new Cat("Felix", 3, "Tabby");
const tweety = new Bird("Tweety", 1, "Canary");
const nemo = new Fish("Nemo", 2, "Clownfish");

fido.eat();
fido.bark();
felix.sleep();
felix.meow();
tweety.reproduce();
tweety.fly();
nemo.eat();
nemo.swim();
