//https://www.typescriptlang.org/docs/handbook/2/generics.html

//Generic type for function
function getData<T>(data: T): T {
    return data;
}

getData("The name");// output string "The name"
getData({ name: 'Test', email: 'test@email.com'}); //output object { name: 'Test', email: 'test@email.com'}


// Generic type for interface 
// generic parameter to be a parameter of the whole interface
interface GenericType<T> {
    value: T
}

const genericType: GenericType<number> = {
    value : 100
};

//Generic type for class
class GenericClass<T> {
    type: T;
    constructor(type: T) {
        this.type = type;
    }
}

const genericClass =  new GenericClass<string>('text');
// But it's show notice if set value with difference type for type of Class
// const genericClassOne =  new GenericClass<number>('text');

//Generic extends interface
interface ObjType {
    foo: string;
    bar: number
}

const nObjType = <T extends ObjType>(arg: T) => {
    return arg;
}

// Generic union
type TOldValue = {
    foo: string
};

type TNewValue = TOldValue & {
    bar: string
}

const getTNewValue = <T extends TNewValue>(arg: T): T => {
    return {
        foo: arg.foo,
        bar: arg.bar
    } as T;
}

// Example each generic for each types
const getEachTypes = <T, U>(title: T, user: U): { title: T, user: U} => {
    return {
        title,
        user
    }
}
getEachTypes<string, object>('Test', { name: 'Test'})

// Generic methods with array type
const getArrayT = <T>(val: T[]) => {
    return val;
}
getArrayT<string>(['test']);
getArrayT<number>([1, 2, 3, 4]);
getArrayT<{ name: 'Test'}>([{ name: 'Test'}]);

// Generic constrains with a class
class TPerson {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return "Get information of person";
    }
}

const getTPerson = <T extends TPerson>(arg: T) => {
    const info = arg.getInfo();
    return `${info} with name: ${arg.name}, email: ${arg.email}`;
}
getTPerson(new TPerson('Test', 'test@email.com'));

