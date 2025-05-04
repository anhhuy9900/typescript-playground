/**
// Conditional Types provide a way to do simple logic in the
// TypeScript type system. This is definitely an advanced
// feature, and it's quite feasible that you won't need to
// use this in your normal day to day code.

// A conditional type looks like:
//
//   A extends B ? C : D
//
// Where the condition is whether a type extends an
// expression, and if so what type should be returned.
 */

//===============  Example 1 =================//
interface IStringId {
  id: string;
}

interface INumberId {
  id: number;
}


type Id<T> = T extends string ? IStringId : INumberId;

let idOne: Id<string>;
// equal to let idOne: IStringId;

let idTwo: Id<number>;
// equal to let idTwo: INumberId;

type VarNullable<T> = T extends null | undefined ? never : T


//===============  Example 2 =================//
type Car = { name: string }
type Motorbike = { name: string }

type CarOrMotor<T> = T extends Car ? { machineName: "Car!" } : { machineName: "Motorbike!" };

type MachineUse = CarOrMotor<Car>;



// Conditional types can be used to tighten your APIs which
// can return different types depending on the inputs.

// For example this function which could return either a
// string or number depending on the boolean passed in.

declare function getID<T extends boolean>(value: T): T extends true ? string : number;

//===============  Distributive Conditional Types =================//
// When conditional types act on a generic type, they become distributive when given a union type.
type Id2<T> = T extends string ? IStringId : INumberId;

