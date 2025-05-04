interface ITypeOF {
    main: string;
    value: number;
}

function getInfo() {
    return {
        name: 'test',
        age: 18
    }
}

type NewType = ReturnType<typeof getInfo>;

/*
NewType will be 
type NewType = {
    name: string,
    age: number
}
*/
