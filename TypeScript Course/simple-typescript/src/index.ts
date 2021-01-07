interface A {
    someProp: number;
}

interface B {
    someProp: number;
    anotherProp: number

}

let a: A = { someProp: 1 };
let b: B = a;