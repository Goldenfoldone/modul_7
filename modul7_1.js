const person = {
    name: 'John',
    age: 34,
}

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}

printInfo.call(person)