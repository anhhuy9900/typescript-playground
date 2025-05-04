/**
 * Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
 */
interface UserRecordInfo {
  age: number;
}

type UserName = "john" | "andrew" | "elon" | "jack";
// It is useful if all items have a similar type of value, especially if there are a large number of them:
const userList: Record<UserName, UserRecordInfo> = {
  john: { age: 18 },
  andrew: { age: 20 },
  elon: { age: 49 },
  jack: { age: 56 },
};

//=========== EXAMPLE 2 =======================
interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
