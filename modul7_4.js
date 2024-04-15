const person = {
    name: 'John',
    age: 34,
};

function setFullName(p){
    return this['fullName'] = p
};

let setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person);