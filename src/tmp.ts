// ! Type Guard

type FuncGetFirstString = {
    content: string;
}
const getFirstStr = (args: any): args is FuncGetFirstString => {
    return args.content !== ''
}

// !Union Types
type TypeUnionA = 'A' | 'B';
type TypeUnionB = 'C' | 'D';
type UnionTypes = TypeUnionA & TypeUnionB;


// ! Intersection types
type tmpUserInfoA = {
    firstName: string;
    lastName: string;
}

type tmpUserInfoB = {
    age: number;
    status: boolean;
}

type tmpUserInfo = tmpUserInfoA & tmpUserInfoB;

function getTmpUser(args: tmpUserInfoA ): tmpUserInfo {
    const a: tmpUserInfoA = {...args};
    const b: tmpUserInfoB = { age: 10, status: true };

    return {
        ...a,
        ...b
    }
}

// Discriminated union
function getTmpUserDiscriminated(args: tmpUserInfoA | tmpUserInfoB ): tmpUserInfoA | tmpUserInfoB {
    const a = {...args};
    const b: tmpUserInfoB = { age: 10, status: true };

    return a || b;
}

// Generic type
type ElementType<T> = {
    new: boolean
    arr: T[]
}

const objectElement: ElementType<string> = {
    new: true,
    arr: ['test1', 'test2']
}

const objectElement2: ElementType<{ name: string }> = {
    new: true,
    arr: [{
        name: 'test'
    }]
}

// Assertion enum type object
type TUserInfo = {
    status: boolean,
    email: string,
}

type ValueOfUserInfo<T> = T[keyof T];
type TNewUserInfo = ValueOfUserInfo<TUserInfo>;
function receiveUserInfo(arg: TNewUserInfo) {
    return arg;

}
receiveUserInfo('');
receiveUserInfo(true);

// ! Condition types
type IdType<T> = T extends string ? string : number;
type TeacherId = IdType<string>; // string
type StudentId = IdType<number>; // number

// ! Omit
type KindOfUser = {
    name: string;
    age: number
    secret: {
        phone: string
    }
}

type newUserDataType = Omit<KindOfUser, 'secret'>;
const newUserData: newUserDataType = {
    name: 'test',
    age: 10
}

// ! Exclude
type tUserInfoA = {
    firstName: string;
    lastName: string;
}

type tUserInfoB = {
    age: number;
    status: boolean;
}

type tUserInfo = tUserInfoA | tUserInfoB
type tUserinfoExclude = Exclude<tUserInfo, tUserInfoB>;
const userTmpExclude: tUserinfoExclude = {
    firstName: 'firstName',
    lastName: 'lastName',
}

// ! Extract
type Student = 'Student';
type Teacher = 'Teacher';
type Parent = 'Parent';
type SchoolTypes = Student | Teacher | Parent;
type ClassOfSchoolType = Extract<SchoolTypes, Student | Teacher>; // type ClassOfSchoolType = "Student" | "Teacher"

// ! InstanceType
class AUserManager {
    name: string;
    email: string;
  
    constructor(user: { name: string; email: string }) {
      this.name = user.name;
      this.email = user.email;
    }
}

type BUserManager = InstanceType<typeof AUserManager>;

const bUserManager: BUserManager = new AUserManager({
    name: 'test',
    email: 'test@mail.com'
})


// ! Partial
interface IUserInfoA {
    firstName: string;
    lastName: string;
}
// Use the Partial to change all properties of an interface to optional
const userInfoAA: Partial<IUserInfoA> = {

}

// !Pick
interface IUserInfoC {
    firstName: string;
    lastName: string;
}

const userInfoC: Pick<IUserInfoA, 'lastName'> = {
    lastName: 'test'
}

// !Record
type TUserInfoD = 'firstName' | 'email';
type TMapToValue = string;
const userRecord: Record<TUserInfoD, TMapToValue> = {
    firstName: 'test',
    email: 'email@mail.com'
}

// !Required
interface IRUserInfo {
    name?: string;
    email?: string;
    status?: boolean;
}
 const RUserInfo: Required<IRUserInfo> = {
     name: "",
     email: "",
     status: false
 }



