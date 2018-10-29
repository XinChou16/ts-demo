/**
 * null
 * undefined
 * boolean
 * string
 * number 
 * object
 * symbol
 */
let a: null = null;
let b: undefined = undefined;

let c: boolean = true;
let d: symbol = Symbol('hi');

let n: number = 1;
n = 2

let n2: any = 2;
n2 = 'str'

// 枚举
enum Gender{
  Man = 3,
  Woman = 6
}
let gender: Gender = Gender.Man;
console.log(gender); // 3

gender = Gender.Woman
console.log(gender); // 6


// 空类型
function print(x: any): void {
  console.log(x);
}

// let a: number = print(1);

// 任何类型赋值undefined, null和undefined
let a1: string = undefined


// 断言 = 武断的说
let n3: any = '123';
let string = n.toString();

// console.log( (<string>n3).split('') );
console.log( (n3 as string).split('') );

// 类型转换
let n4: number = 123;
let n5: string = n4.toString();

let n6: string = '123';
let n7: number = parseFloat(n6);

let s1: number = 1;
let s2: boolean = Boolean(s1);

let obj = { name: 'dd' };
let str = JSON.stringify(obj);
str //

let str2 = `{name: 'dd'}`;
let obj2 = JSON.parse(str2);
console.log(typeof obj2); // object
console.log(obj2); // { name: 'dd' }