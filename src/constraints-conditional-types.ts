interface User {
    name: string;
    email: string;
}

interface WritePermissions {
    write: true;
}

interface ReadPermissions {
    write: false;
    read: true
}

interface Admin extends User, WritePermissions {};
interface Author extends User, WritePermissions {};
interface Reader extends User, ReadPermissions {};

// when the T extends { write: true } 
// that's mean FilterWritable type have writeable permission
// Just applying a constraint on our interface which just return a boolean of true or false
// Based on whether this particular type thats passed as a generic to our filter type has right permission
type FilterWritable<T> = T extends { write: true } ? true : false;
type Writeable = FilterWritable<Admin>;

const writeable: Writeable = true;

if (writeable) {
    console.log('The permission allow for this action');
}