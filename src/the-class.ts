class Profile {
  name: string;
  email: string;
  age: number | undefined;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  info() {
    return this;
  }
}

const profile: Profile = new Profile("Huy", "test@email.com", 33);
profile.age = 55; //OK
console.log(profile.info());

class UserInformation extends Profile {
  gender: string;

  constructor(name: string, email: string, age: number, gender: string) {
    super(name, email, age);
    this.name = name;
    this.email = email;
    this.age = age;
    this.gender = gender;
  }

  info() {
    const info = super.info();
    info.gender = this.gender;
    return info;
  }
}

// Generics Classes
class UserType<T1, T2> {
  constructor(public type1: T1, public type2: T2) {}
}

// And functions
interface UserBaseType<T> { 
    type1: T;
    type2: T;
}

let userType = function <T>(u: UserBaseType<T>) {
    return new UserType(u.type1, u.type2);
};