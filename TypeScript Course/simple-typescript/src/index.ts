// interface A {
//     someProp: number;
// }

// interface B {
//     someProp: number;
//     anotherProp: number

// }

// let a: A = { someProp: 1 };
// let b: B = a;

// Interfaces
// interface Profile {
//     readonly name: string;
//     age?: number;

// }

// let profile: Profile = {
//     name: 'Ali',
// }

// profile.name = 'John';


// // Index Signature

// interface A {
//     //index signature:
//     [key: string]: string | number;
//     someProp: string;
    
// }

// const a: A = {someProp: 'string'};
// a.x  = 1;
// a.y = 2;

// // Call Signature

// interface Sum {
//     (a: number, b: number): number;
//     prop1: string;
// }

// const sum: Sum = (a,b) => a + b;
// sum.prop1 = 'number';


// // Extending Interfaces

// interface Parent {
//     a: string;
// }

// interface Parent2 {
//     y: string;
// }

// interface Parent3 {
//     z: string;
// }

// interface Child extends Parent, Parent2, Parent3 {}

// let child: Child = {a: 'something'}

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Functions:

function sum(a: number, b?: number = 0) {
    return a + b;
}

sum(1);

type MyFunc = (a: number, b: number) => number;


const sum2: MyFunc = (a, b) => a + b;

//unknown number of args

function sumEverything(arg1: string, arg2: boolean, ...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0)
}

// Overloads

function add(a:string, b:string):string;

function add(a:number, b:number): number;
