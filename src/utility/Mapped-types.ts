/**
 * 
 * When you don’t want to repeat yourself, sometimes a type needs to be based on another type.
 * Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time
 * 
 */

type BooleanAndString = {
  [key: string]: boolean | string;
};

const mappedBooleanString: BooleanAndString = {
  name: 'test',  // 👍
  status: false,  // 👍
  // news: 1  // 👎
};

interface Character {
  playMovie: () => void;
  playMusic: () => void;
}

type toFlags<Type> = { [Property in keyof Type]: boolean };

type cFeatures = toFlags<Character>;

/*
  equal to 
  
  type cFeatures = {
    playMovie: boolean;
    playMusic: boolean;
  }
*/

type StringMap<T> = {
  [P in keyof T]: string;
};

function showMapType(arg: StringMap<{ id: number; name: string }>) {
  console.log(arg);
}

// showMapType({ id: 1, name: "Test" });
// Error: Type 'number' is not assignable to type 'string'.

showMapType({ id: "testId", name: "This is a Test" });
// Output: {id: "testId", name: "This is a Test"}
