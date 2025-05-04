// import "reflect-metadata";

function required(target: any, key: string) {
    let currentValue = target[key];
  
    Object.defineProperty(target, key, {
      set: (newValue: string) => {
        if (!newValue) {
          throw new Error(`${key} is required.`);
        }
        // console.log('required - newValue: ', newValue);
        currentValue = newValue;
        // console.log('required - currentValue: ', currentValue);
      },
      get: () => currentValue,
    });
}

function calculateTax() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalFunc = descriptor.value;
        descriptor.value = function(...args: any[]) {
            // console.log('calculateTax - this: ', this);
            // console.log('calculateTax - args: ', args);
            // console.log('calculateTax - target: ', target['price']);
            // console.log('calculateTax - propertyKey: ', propertyKey);
            // console.log('calculateTax - originalFunc: ', originalFunc);
            args[0] = target['price'] / 10
            
            return originalFunc.apply(this, args)
        }
        return descriptor;
    }
}

function toLowerCase(target: any, key: string) {
    let currentValue = target[key];
  
    Object.defineProperty(target, key, {
      set: (newValue: string) => {
        console.log('toLowerCase - newValue: ', newValue);
        currentValue = newValue.toLowerCase();
        console.log('toLowerCase - currentValue: ', currentValue);
      },
      get: () => currentValue,
    });
}

function splitDecorator() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const currentValue: any = target[propertyKey];
        const originalFunc = descriptor.value;
        // console.log('splitDecorator - target: ', target);
        // console.log('splitDecorator - propertyKey: ', propertyKey);
        // console.log('splitDecorator - currentValue: ', currentValue);
        // console.log('splitDecorator - descriptor: ', JSON.stringify(descriptor));
        descriptor.value = function(...args: any[]) {
            // console.log('splitDecorator - args: ', args);
            args[0] =  args[0].split('');
            return originalFunc.apply(this, args);
        }
        return descriptor;
    }
}

function reverseDecorator() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalFunc = descriptor.value;
        descriptor.value = function(...args: any[]) {
            args[0] =  args[0].reverse();
            originalFunc.apply(this, args);
            return originalFunc.apply(this, args);
        }
        return descriptor;
    }
}

function joinDecorator(type: string = '') {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalFunc = descriptor.value;
        descriptor.value = function(...args: any[]) {
            args[0] =  args[0].join(type);
            originalFunc.apply(this, args);
            return originalFunc.apply(this, args);
        }
        return descriptor;
    }
}

function calculatePrice() {
    return function (target: any, propertyKey: string) {
        let currentValue = target[propertyKey];
        Object.defineProperty(target, propertyKey, {
            set: (newValue: number) => {
            console.log('toLowerCase - newValue: ', newValue);
            currentValue = newValue * 2;
            console.log('toLowerCase - currentValue: ', currentValue);
            },
            get: () => currentValue,
        });
    }
  }
  

class Example2Decorator {
    @required
    private _name: string;

    @calculatePrice()
    price: number = 0;

    constructor(name: string = '') {
        this._name = name;
       // this._price = price;
    }
    
    @splitDecorator()
    @reverseDecorator()
    @joinDecorator('')
    reverseStr(str: string): string {
        return str;
    }

    @toLowerCase
    getName() {
        return this._name;
    }

    
    // set price(value: number) {
    //     this._price = value;
    // }

    // get price() {
    //     return this._price;
    // }

    @calculateTax()
    calculatePriceTax(...args: any) {
        return args[0];
    }
}

const ex2 = new Example2Decorator('HUY')
const reverseStr1 = ex2.reverseStr('hello');
console.log("🚀 ----------------------------------------------------------------------🚀");
console.log('reverseStr1: ', reverseStr1);
console.log("🚀 ----------------------------------------------------------------------🚀");
console.log('getName: ', ex2.getName());
console.log("🚀 ----------------------------------------------------------------------🚀");
console.log('calculatePriceTax: ', ex2.calculatePriceTax());
console.log("🚀 ----------------------------------------------------------------------🚀");
ex2.price = 100;
console.log('price: ', ex2.price);