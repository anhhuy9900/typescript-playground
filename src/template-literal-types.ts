/** 
 * Template literal types build on string literal types, and have the ability to expand into many strings via unions.
 * They have the same syntax as template literal strings in JavaScript, but are used in type positions. 
 * When used with concrete literal types, a template literal produces a new string literal type by concatenating the contents.
 * https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
*/

// Union type with template literal types
type InternalEmailType = 'internal_email' | 'internal_seconde_email';
type ExternalEmailType = 'external_email' | 'external_second_email';
type EmailTypes = `${InternalEmailType | ExternalEmailType}_type`;

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