// Class
class Student1 {
  fullName: string;
  firstName: string,
  middleInitial: string,
  lastName: string,
  constructor(firstName: string, middleInitial: string, lastName: string) {
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string; 
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let student = new Student("Jane", "M.", "User");

console.log(greeter(student))