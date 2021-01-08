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

// function sum(a: number, b?: number = 0) {
//     return a + b;
// }

// sum(1);

// type MyFunc = (a: number, b: number) => number;


// const sum2: MyFunc = (a, b) => a + b;

// //unknown number of args

// function sumEverything(arg1: string, arg2: boolean, ...numbers: number[]): number {
//     return numbers.reduce((result, num) => result + num, 0)
// }

// // Overloads

// function add(a:string, b:string):string;

// function add(a:number, b:number): number;

class Robot {
    //protected makes it so you can access the prop in here or child classes can access within
    //like private but extends to children of parent classes
    // protected name: string;
    _color: string;

    static availableColors = ['green', 'yellow'];
    static isColorAvailable(color: string) {
        return Robot.availableColors.includes(color);
    }

    constructor(protected _name:string, _color: string) {
        this._color = _color;
    }

    askName() {
        console.log(`My name is ${this.name}`);
    }

    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters.`)
    }

    set color(color: string) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error (`Color ${color} is not available.`);
        }
        this._color = color;
    }

    set name(value: string) {
        this._name = 'PREFIX_' + value;
    }

    get name() {
        return this._name + '_SUFFIX';
    }
}

class FlyingRobot extends Robot {
    private readonly jetpackSize: number;
    constructor(name: string, jetpackSize: number) {
        super(name);
        this.jetpackSize = jetpackSize;
    }

    move(distance: number) {
        console.log(`${this.name} is flying.`);
        super.move(distance);
    }
}

const robot = new Robot('john');
robot.askName();

const flyingRobot = new FlyingRobot('Ali', 30);
flyingRobot.move(10);
// console.log(flyingRobot.jetpackSize) //because private line 114 err
// console.log(robot.name) // because protected line 98 would err

flyingRobot.name = 'Ali';
console.log(`My name is ${flyingRobot.name}`);
