/* AUTHOR: Jaimin
JavaScript Concept: class
GITHUB: https://github.com/Jaimin25
 */

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    isAdult() {
        return this.age >= 18;
    }
}

const person1 = new Person("firstname1", "lastname1", 30);
const person2 = new Person("firstname2", "lastname2", 16);

console.log(person1.getFullName());
console.log(person1.isAdult());

console.log(person2.getFullName());
console.log(person2.isAdult());
