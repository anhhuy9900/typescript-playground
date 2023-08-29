interface IMutableProfile {
    readonly email: string;
}

type Mutable<T> = {
    -readonly [Key in keyof T]: T[Key];
}

const data: Mutable<IMutableProfile> = {
    email: 'huy#email.com'
}

data.email = 'test';
