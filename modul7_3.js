const people = [
    {
        name: "John",    
        age: 25,
    },
    {
        name: "Jane",    
        age: 30,
    },
    {
        name: "Alice",    
        age: 18,
    },
    {
        name: "Bob", 
        age: 12,
    }

];

const Age_n = people.filter((p)=>{return p.age >= 18}).map((p) => {return p.age})

const Name_n = people.map((p)=>{return p.name});

console.log(Age_n)
console.log(Name_n)