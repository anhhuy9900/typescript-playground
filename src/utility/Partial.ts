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
