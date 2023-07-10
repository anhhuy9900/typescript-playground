// There are 3 basic types in TypeScript
let isStatus: boolean = false;
let lines: number = 42;
let file: null = null;
let realName: undefined = undefined;
const test: string = "Anders";

// A union type is a variable that can be assigned more than one type
let age: string | number;
age = 25;
age = '25'

// For enumerations
const enum Colors { 
    Red = 'red',
    Blue = 'blue',
    Black = 'black'
}
let c: Colors = Colors.Red;
console.log(Colors['Black']); // "Black"

interface IProfile {
    name: string;
    age?: number | undefined;
    info(): void;
  }

const p: IProfile = { name: "Huy", info: () => { } };
// p.age = '35' //Error Type 'number' is not assignable to type 'string'

// Objects that have the optional property:
let validPerson: IProfile = {
    name: "Huy", age: 30, info: () => { },
};


let numbers: Array<number> = [0, 1, 2, 3, 4];
let moreNumbers: ReadonlyArray<number> = numbers;
moreNumbers[5] = 5; // Error, elements are read-only
moreNumbers.push(5); // Error, no push method (because it mutates array)
moreNumbers.length = 3; // Error, length is read-only
numbers = moreNumbers; // Error, mutating methods are missing