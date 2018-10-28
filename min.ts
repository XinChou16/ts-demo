// 返回值类型定义
// function min(a:number, b:number):number {
//   if(a < b) {
//     return a;
//   }else {
//     return b;
//   }
// }

// let c = min(1, 2);
// console.log(c);

// 重载
function add(a:string, b:string):string;
function add(a:number, b:number):number;
function add(a:any, b:any):any {
  return a + b;
}
console.log(add('1', '2')); // 12

// bubble sort
function selectSort(a: number[]): number[] {
  for(let i = 0; i <a.length - 1; i++) {
    let minIndex = i;
    for(let j = i+1; j <a.length; j++) {
      if(a[j] < a[minIndex]) {
        minIndex = j
      }
    }
    let tmp = a[minIndex]
    a[minIndex] = a[i]
    a[i] = tmp;
  }
  return a
}

let sort = selectSort([5,4,2,1,3])
console.log(sort); //[1,2,3,4,5]

// tuple
enum Gender {
  Male,
  Female
}
interface Person {
  age: number,
}

function marry(a: Person, b: Person ): [Person, Person] {
  if(a.age < b.age) {
    return [a, b]
  } else {
    console.log('err')
  }
}
let a = {age: 23};
let b = {age: 23};
console.log(marry(a, b))
