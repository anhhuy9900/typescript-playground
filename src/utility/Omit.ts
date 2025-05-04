// Omit<Type, Keys>
// Omit creates a new type by selecting all properties of Type and then removing Keys:
type UserOmitType = {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
}

type userOmitInfo = Omit<UserOmitType, 'phoneNumber'>;
const userInfoOmit: userOmitInfo = {
    name: 'John',
    email: 'jjjj@dd.com',
    address: '123 Main St'
};