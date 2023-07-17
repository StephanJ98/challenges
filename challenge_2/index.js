const person = {
    "firstName": "Jack",
    "lastName": "Smith",
    "age": 19,
    "employed": false,
    "salary": 6000
}

console.log(`El nombre es ${person.firstName} ${person.lastName}.`)
console.log(`Tiene ${person.age} años.`)
console.log(person.employed ? `${person.firstName} ${person.lastName} cobra ${person.salary} €/mes.` : '')