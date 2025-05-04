/**
 * ReturnType constructs a type of the return type of the function Type
 * Constructs a type consisting of the return type of function Type.
 */

const getUserReturn = () => {
    return {
        name: 'John',
        email: 'hhhh@email.com',
        phoneNumber: '123456789',
    };
}

type getUserReturnType = ReturnType<typeof getUserReturn>;
const userReturn: getUserReturnType = {
    name: 'John',
    email: 'asssss@gg.com',
    phoneNumber: '123456789',
};