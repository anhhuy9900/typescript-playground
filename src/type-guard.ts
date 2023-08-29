/**
 * !Type Guards
 * A type guard is a TypeScript technique used to get information about the type of a variable, usually within a conditional block. 
 * Type guards are regular functions that return a boolean, taking a type and telling TypeScript if it can be narrowed down to something more specific
 * When you are using just plain JavaScript Objects (using structural typing to your advantage), you do not even have access to instanceof or typeof. 
 * A user-defined type guard function is a function that simply returns arg is isFirst
 */

interface FirstA {
    first: string;
}

interface SecondB {
    second: number;
}

const isFirst = (arg: any): arg is FirstA => {
    return arg.first !== undefined;
}

/**
 * Sample usage of the User Defined Type Guard
 */
function doSomething(arg: FirstA | SecondB) {
    if (isFirst(arg)) {
        console.log(arg.first); // OK
        console.log(arg.second); // Error!
    }
    else {
        console.log(arg.first); // Error!
        console.log(arg.second); // OK
    }
}

