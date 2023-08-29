// Type Assertions
// Boolean
let isStatus: boolean = false;

// Number
let lines: number = 42;

// Null
let file: null = null;

// Undefined
let realName: undefined = undefined;

// String
const test: string = "Huy";

// Union types
let age: string | number;
age = 25;
age = "25";
type Unit = "px" | "vh" | "vw";



// any
// not all type information is available or its declaration would take an inappropriate amount of effort
let any: any = "";
any = true;
any = 1;

// Array
let list: Array<number> = [1, 2, 3];

// Tuple
// Tuple types allow you to express an array with a fixed number of elements whose types are known, 
// but need not be the same. For example, you may want to represent a value as a pair of a string and a number
// A union type is a variable that can be assigned more than one type
let tup: [string, number];
tup = ["Hello", 1];

// But error when write like that
// tup = [1, 1];

// Void
function userF(): void {
  console.log("This is function");
}

// Object
const obj = {
    name: 'hello'
}
declare function create(o: object | null): void;
// OK
create({ name: 0 });
// Error
// create(undefined);


// For enumerations
const enum Colors {
  Red = "red",
  Blue = "blue",
  Black = "black",
}
let c: Colors = Colors.Red;
console.log(Colors["Black"]); // "Black"

// Type assertions
// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” 
// A type assertion is like a type cast in other languages, 
// but it performs no special checking or restructuring of data
const someValue = '1';
let strLength: number = (someValue as string).length;

interface IProfile {
  name: string;
  age?: number | undefined;
  info(): void;
}

const p: IProfile = { name: "Huy", info: () => {} };
// p.age = '35' //Error Type 'number' is not assignable to type 'string'

// Objects that have the optional property:
let validPerson: IProfile = {
  name: "Huy",
  age: 30,
  info: () => {},
};

let numbers: Array<number> = [0, 1, 2, 3, 4];
let moreNumbers: ReadonlyArray<number> = numbers;
// moreNumbers[5] = 5; // Error, elements are read-only
// moreNumbers.push(5); // Error, no push method (because it mutates array)
// moreNumbers.length = 3; // Error, length is read-only
// numbers = moreNumbers; // Error, mutating methods are missing


// ------------------- Union types ------------------- //
type unTypeA = 'Type A';
type unTypeB = 'Type B';
// type UnionType = "Type A" | "Type B"
type UnionType =  unTypeA | unTypeB;

// Tagged Union Types for modelling state that can be in one of many shapes
type State = 
  | { type: "loading" }
  | { type: "success", value: number }
  | { type: "error", message: string };
declare const state: State;
if (state.type === "success") {
  console.log(state.value);
} else if (state.type === "error") {
  console.error(state.message);
}


// ------------------- Combine types ------------------- //
type comTypeA = 'Type A';
type comTypeB = 'Type B';
// combineTypes = "Type A" | "Type B"
type combineTypes =  comTypeA | comTypeB;


// ------------------- Literal types ------------------ //
let sizes: 10 | 20 | 30 = 30;
let colors: "White" | "Black" | "Red" = 'Black';



// ------------------- unknown types ------------------- //
// when you defined unknown for a variable and then you can assign any types for it
let unknownVal: unknown;
unknownVal = "maybe a string";
unknownVal = 1;
unknownVal = false;
unknownVal = [];
unknownVal = {};
unknownVal = null;
unknownVal = undefined;

// But you can't assign the value of unknown for any variable with difference types, for example
// let uString: string = unknownVal;
// let uNumber: number = unknownVal;
// let uBoolean: boolean = unknownVal;
