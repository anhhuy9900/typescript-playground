//https://www.typescriptlang.org/docs/handbook/2/generics.html


//====================== Generic type for function ======================//
function getData<T>(data: T): T {
    return data;
}

getData("The name");// output string "The name"
getData({ name: 'Test', email: 'test@email.com'}); //output object { name: 'Test', email: 'test@email.com'}


//====================== Generic type for interface ======================//
// generic parameter to be a parameter of the whole interface
interface GenericType<T> {
    value: T
}

const genericType: GenericType<number> = {
    value : 100
};

//====================== Generic type for class ======================//
class GenericClass<T> {
    type: T;
    constructor(type: T) {
        this.type = type;
    }
}

const genericClass =  new GenericClass<string>('text');
// But it's show notice if set value with difference type for type of Class
// const genericClassOne =  new GenericClass<number>('text');


//====================== Generic extends interface  ======================//
interface ObjType {
    foo: string;
    bar: number
}

const nObjType = <T extends ObjType>(arg: T) => {
    return arg;
}

//====================== Example Generic union  ======================//
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

//====================== Example each generic for each types  ======================//
const getEachTypes = <T, U>(title: T, user: U): { title: T, user: U} => {
    return {
        title,
        user
    }
}
getEachTypes<string, object>('Test', { name: 'Test'})


function mergedObj<T, U>(objA: T, objB: U) {
    return Object.assign((objA as {}), objB) as (T & U);
}


//====================== Generic methods with array type  ======================//
const getArrayT = <T>(val: T[]) => {
    return val;
}
getArrayT<string>(['test']);
getArrayT<number>([1, 2, 3, 4]);
getArrayT<{ name: 'Test'}>([{ name: 'Test'}]);




//====================== Generic constrains with a class  ======================//
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


//====================== EXAMPLE2 => Generic constrains with a class  ======================//,
class KeyValue<K, V> {
    private key: K;
    private value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    getKeyValue() {
        return `The key is: ${this.key}, and the value is:${this.value}`
    }
}
// If you aren't assign types for class generic and then default the type of parameters will be type of class generic 
const keyvalue = new KeyValue('1', 'Test');

// Error -> Argument of type 'number' is not assignable to parameter of type 'string'
// const keyvalue1 = new KeyValue<string, string>(1, 'Test');

// OK
const keyvalue2 = new KeyValue<number, string>(1, 'Test');



//====================== Generic promise  ======================//
const promiseRes = new Promise<number>((resolve, reject) => {
    // Argument of type 'string' is not assignable to parameter of type 'number | PromiseLike<number>'
    // resolve('OK');

    // resolve(200);
});

// Error
// promiseRes.then((res: string) => {
//     return res
// });

// Ok
promiseRes.then((res: number) => {
    return res
});