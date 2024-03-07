const persons = [];
let inputData = prompt("Enter something to continue ");
while (inputData) {

    const data = inputData.split(",");
    const id = parseInt(data[0]);
    const age = parseInt(data[3]);
    if (isNaN(id)) {
        alert("Error, valid id Number ");
        inputData = prompt("Enter info about your person");
        continue;
    }
    const person = new Person(id, data[1].trim(), data[2].trim(), age);
    if (findPerson(persons, id)) {
        inputData = prompt("Enter info about your person");
        continue;
    }
    persons.push(person);
    inputData = prompt("Enter info about your person");
}
printPersons(persons);
printStats(persons);

function findPerson(persons, id) {
    if (persons.some(p => p.id === id)) {
        alert("This id already in Massive");
        return true;
    }
}

function printPersons(persons) {
    console.log(persons);
}

function printStats(persons) {
    let minAge = persons.reduce((min, p) => Math.min(min, p.age), Infinity);
    console.log(`Min Age: ${minAge}`);
    let maxAge = persons.reduce((max, p) => Math.max(max, p.age), -Infinity);
    console.log(`Max Age: ${maxAge}`);
    let sum = persons.reduce((result, item) => result + item.age, 0);
    let avg = sum / persons.length;
    console.log(`Avg: ${avg}`);
    console.log(`Summ of age ${sum}`);
}


function Person(id, name, lastName, age) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${name} ${lastName}`;
    }
}
