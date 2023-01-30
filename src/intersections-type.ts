interface UserInfo {
    name: string;
    email: string;
};

interface UserProfile {
    phoneNumber: string;
    address: string;
}

type User = UserInfo & UserProfile;

const user: User = {
    name: 'John',
    email: 'huy@email.com',
    phoneNumber: '123456789',
    address: '123 Main St'
};

function getUser(user: UserInfo): UserInfo & UserProfile {
    return {
        ...user,
        phoneNumber: '123456789',
        address: '123 Main St'
    };
};