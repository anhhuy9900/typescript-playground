function createGetterObject<TObj extends Record<string, unknown>>(obj: TObj): PropertyGetter<TObj> {
    const newObj: any = {};
    for (const k of Object.keys(obj)) {
        const capitallize = k[0].toUpperCase() + k.substring(1);
        const funcName = `get${capitallize}`;
        newObj[funcName] = () => obj[k];
    }

    return newObj;
}

type PropertyGetter<Obj extends Record<string, unknown>> = {
    [TKey in string & keyof Obj as `get${Capitalize<TKey>}`]: () => Obj[TKey];
}

const userCreate = createGetterObject({
    name: "Anh",
    firstName: "Huy",
});
  
console.log(userCreate);
console.log(userCreate.getName());
console.log(userCreate.getFirstName());