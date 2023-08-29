/**
 * If we want to remove specific elements from a union type, we can use the Exclude Type - but there are other ways we can manipulate union types.
 * The Extract Type lets us define a new list, and returns a new type if any items in that list exist in our original type.
 * Extract allows you to extract typing information from a type. 
 * Extract accepts two Parameters, first the Interface and second the type that should be extracted
 */

type MovieCharacters =
  | 'Harry Potter'
  | 'Tom Riddle'
  | { firstname: string; name: string };

type hpCharacters = Extract<MovieCharacters, string>;
// equal to type hpCharacters = 'Harry Potter' | 'Tom Riddle';

type hpCharacters2 = Extract<MovieCharacters, { firstname: string }>;
// equal to type hpCharacters = {firstname: string; name: string };

//===============  Example 2 =================//
interface IExtUserInfoA {
  email: string;
  name: string;
  age: number;
}

interface IExtUserInfoB {
  country: string;
}

type ExtUserInfo = IExtUserInfoA | IExtUserInfoB;
/**
 * When we write Extract, Extract checks ExtUserInfo
 * Extract therefore is a great tool when we want to limit our original union type to a set number of defined members for specific variables or outputs
 */
const extUserInfo: Extract<ExtUserInfo, IExtUserInfoB> = {
  country: 'VN',
}

console.log('extUserInfo: ', extUserInfo);
// extUserInfo:  { country: 'VN' }