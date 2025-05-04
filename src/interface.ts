/**
 * Let’s develop our sample further. Here we use an interface that describes objects 
 * 
 */
interface JSONFunc extends Response {
    version: number;

    payloadSize: number;
    // This property might not be on the object
    options?: boolean;

    // These two ways to describe a property which is a function
    update: (retry: number) => void;
    updateRetry(retry: number): void;

    // You can call this object via () - function in JS object which can be called
    (): JSONFunc;

    //You can use new on the object this interface describes
    new(s: string): JSONFunc;

    // any property not describe already is assumed to exist, are all properties must be numbers
    // [key: string]: number;

    //Tell TS that a property can not be changed
    readonly number: number;
}


// this interface call is freeze interface
interface ImmutableInterface {
    readonly title: string;
    readonly subject: string;
    readonly object: string;
}