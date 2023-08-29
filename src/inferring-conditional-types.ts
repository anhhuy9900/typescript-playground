type ArrElementType<T> =  T extends (infer E)[] ? E : T;

type ElementTypeOne = ArrElementType<string[]>;
// string[]

type ElementTypeTwo = ArrElementType<number[]>;

type ElementTypeThree = ArrElementType<(number | boolean | string)[]>;

type ElementTypeFour = ArrElementType<{ name: string}>;

type ElementTypeFive = ArrElementType<string>;

/**
 * Infer The return of a function
 */

function returnType() {
    return 1111;
}

type FunctionReturnType<T> = T extends () => infer R ? R : T;

/**
 * Typescript does the heavy lifting for you and infer the type of return type of a function
 * You don't have to use your brains in order to type all the annotations and create interface for third party libraries
 * Having said that, most of the libraries these days do use typescript and they do export interfaces for function return types
 * But, if a particular function doesn't do that, you can always use the infer keyword and infer the return type of a function
 */
type GetNewType = FunctionReturnType<typeof returnType>;
