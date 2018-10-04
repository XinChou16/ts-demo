
// Interfaces
interface Person {
  firstLover: string;
  lastLover: string;
}

function hello(person: Person) {  
  return 'Hello, ' + person.firstLover + ' ' + person.lastLover;
}

let lover = {
  firstLover: 'Violet',
  lastLover: 'Lily'
}

console.log(hello(lover))
