// Example 1
interface StringId {
  id: string;
}

interface NumberId {
  id: number;
}

type Id<T> = T extends string ? StringId : NumberId;

let idOne: Id<string>;
// equal to let idOne: StringId;

let idTwo: Id<number>;
// equal to let idTwo: NumberId;

type VarNullable<T> = T extends null | undefined ? never : T


// Example 2
type Car = { name: string }
type Motorbike = { name: string }

type CarOrMotor<T> = T extends Car ? { machineName: "Car!" } : { machineName: "Motorbike!" };

type MachineUse = CarOrMotor<Car>;
