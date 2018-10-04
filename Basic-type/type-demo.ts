// type-demo
// https://www.tutorialspoint.com/typescript/typescript_types.htm
let isDone: boolean = false

let color: string = 'magicColor'
color = 'red'

// templat string
let fullName: string = `Bob Tom`
let age: number = 23
let sentence: string = `Hello, my name is ${fullName}, I'm ${age} years old`

let sentence2: string = "Hello, my name is " + fullName + ".\n\n" +
  "I'll be " + (age + 1) + " years old next month.";

// Array
let list: string[] = ['1', '2']
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

// Tuple
let x: [string, number]
x = ['Hello', 100]

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green


enum Color2 {Red  = 1, Green, Blue}
let c: Color2 = Color.Green

// Any
let notSure: any = 4
notSure = 'srfrfrf'
notSure = false

let list3: any[] = [1, true, 'false']
list3[1] = {}

// Void
function tip(): void {
  console.log('tip')
}

// Object
declare  function create(o: object | null): void 

create({ props: 0 })
