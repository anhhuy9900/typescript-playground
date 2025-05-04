/**
 * The Partial utility type allows you to transform an interface into a new interface where all properties are optional.
 */

type userType = {
    name: string;
    email: string;
}

const userPartial: Partial<userType> = {
    name: 'john',
}


interface UserData {
    name: string;
    email: string;
    phoneNumber: string;
}


const updateUser = (user: UserData, fields: Partial<UserData>): UserData => {
    return {
        ...user,
        ...fields
    };
}

const userData: UserData = {
    name: 'John',
    email: 'hhh@email.com',
    phoneNumber: '123456789'
}
updateUser(userData, { phoneNumber: '0893838383' });

// Example The Partial Utility Type
interface  Elf {
    name: string;
    weapon: "test";
    point: number;
}
type  PartialElf = Partial<Elf>;

// We can omit the weapon attribute as all properties are now optional
const  partialElf: PartialElf = {
    name:  "Leo",
    point:  100,
};

type  PartialType<T> = {
    [P  in  keyof  T]?: T[P];
};
