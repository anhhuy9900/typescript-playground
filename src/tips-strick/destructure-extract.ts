function getPerson(person: { name: string; age: number }) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}

// We can do this
function getNewPerson({ name, age }: { name: string; age: number }) {
    console.log(`Name: ${name}, Age: ${age}`);
}