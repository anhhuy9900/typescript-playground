/**
 * Intersection types are closely related to union types, but they are used very differently. 
 * An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need
 * https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
 */

interface ISUserInfo {
    name: string;
    email: string;
};

interface ISUserProfile {
    phoneNumber: string;
    address: string;
}

type ISUser = ISUserInfo & ISUserProfile;

const user: ISUser = {
    name: 'John',
    email: 'huy@email.com',
    phoneNumber: '123456789',
    address: '123 Main St'
};

function getUser(user: ISUserInfo): ISUserInfo & ISUserProfile {
    return {
        ...user,
        phoneNumber: '123456789',
        address: '123 Main St'
    };
};

const newUser = getUser(user);
// const newUser: ISUserInfo & ISUserProfile
// newUser:  {
//     name: 'John',
//     email: 'huy@email.com',
//     phoneNumber: '123456789',
//     address: '123 Main St'
//   }
console.log('newUser: ', newUser);