// InstanceType constructs a type consisting of the instance type of a constructor function in Type.
// Basically, it is similar to ReturnType, but acts on a class constructor
// InstanceType<Type>

class UserManager {
  name: string;
  surname: string;

  constructor(user: { name: string; surname: string }) {
    this.name = user.name;
    this.surname = user.surname;
  }
}

type UserManagerInstanceType = InstanceType<typeof UserManager>;
const userManager: UserManagerInstanceType = new UserManager({
    name: 'John',
    surname: 'Doe',
});
console.log(userManager);
// UserManager { name: 'John', surname: 'Doe' }