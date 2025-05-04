
export enum LogsLevel {
    ERROR,
    INFO,
    WARN,
    DEBUG,
    TRACE
}

/**
 * This decorator function for class method 
 */
function Log(level: LogsLevel): MethodDecorator {
    console.log('Log function is running');

    // this is decorator factory function
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalFunc = descriptor.value;

        descriptor.value = function(...args: any[]) {
            console.log('Log function - args: ', args);
            if (level === LogsLevel.INFO) {
                args.push({
                    info: 'Log Information for this record'
                });
            }

            if (level === LogsLevel.ERROR) {
                args.push({
                    info: 'Log error for this record'
                });
            }
            
            console.log('Log function - args AFTER: ', args);
            originalFunc.apply(this, args);
        }
    }
}

/**
 * 
 * This function decorator for class property 
 */
function generateId(): PropertyDecorator {
    return (prototype: any, propertyKey: string) => {
        Object.defineProperty(prototype, propertyKey, {
            get: function() {
                console.log('generateId: ', this);
                return this["_id"] = Date.now().toString(36) + Math.random().toString(36).slice(2);
            }
        })
    }
}

/**
 * This function decorator for static method
 */
function staticMethodDecorator(constructor: Object, methodName: string, descriptor: PropertyDescriptor) {
    console.log('staticMethodDecorator - constructor: ', constructor);
    console.log('staticMethodDecorator - methodName: ', methodName);
    console.log('staticMethodDecorator - descriptor: ', descriptor);
    descriptor.writable= true;
}

/**
 * This is function decorator for method parameters
 */
const parametersMethodDecorator = (value: string) => {
    console.log('parametersMethodDecorator - value: ', value);
    return (target: any, propertyKey: string, parameterIndex: number) => {
        const ownKeys = Object.getOwnPropertyDescriptor(target, propertyKey);
        console.log('parametersMethodDecorator - ownKeys: ', ownKeys);
        console.log('parametersMethodDecorator - ownKeys.value: ', ownKeys?.value);
        console.log('parametersMethodDecorator - target: ', target);
        console.log('parametersMethodDecorator - propertyKey: ', propertyKey);
        console.log('parametersMethodDecorator - index: ', parameterIndex);
    }
}


class DbService {
    // Decorator property
    @generateId()
    id: string

    data: any;

    // Decorator method
    @Log(LogsLevel.INFO)
    saveDate(data: Record<string, any>, status: boolean, logInfo: string | null = null) {
        console.log('DbService - id: ', this.id);
        console.log('DbService - data: ', data, ', status: ', status, ', logInfo: ', logInfo);
        this.data = {
            data, 
            status,
            logInfo
        }

        console.log('DbService - data AFTER: ', this.data);
    }

    @staticMethodDecorator
    public static getStaticData(): void {
        console.log('DbService - This is static data for some features');
    }

    getDataParameters(@parametersMethodDecorator('params') params: object) {
        params =  {
            name: 'huy',
            email: 'huy@email.com',
            age: 33,
            ...params
        }
        console.log('DbService - getDataParameters - params: ', params);
    }
}

const dbService = new DbService();
dbService.saveDate({ test: 1}, true);
DbService.getStaticData();
dbService.getDataParameters({ gender: 'man', country: 'VN'})