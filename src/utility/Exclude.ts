/**
 * Exclude does the opposite of extract. It allows you to generate a new type by excluding a type.
 * In TypeScript, we can define a specific type called a union type. A union type is a list of possible values for something
 */
type MovieCharactersExclude =
  | 'Harry Potter'
  | 'Tom Riddle'
  | { firstname: string; name: string };

type hpCharactersExclude = Exclude<MovieCharactersExclude, string>;
// equal to type hpCharacters = {firstname: string; name: string };

type hpCharactersExclude1 = Exclude<MovieCharactersExclude, { firstname: string }>;
// equal to type hpCharacters = 'Harry Potter' | 'Tom Riddle';


//===============  Example 2 =================//
interface IExUserInfoA {
  email: string;
  name: string;
  age: number;
}

interface IExUserInfoB {
  country: string;
}

type ExUserInfo = IExUserInfoA | IExUserInfoB;
/**
 * Suppose we have a situation where we want to use ExUserInfo, but we don't want to include IExUserInfoB in the valid list of values
 * That's where we can use Exclude. Exclude has the syntax Exclude<ExUserInfo, IExUserInfoB>. 
 * We pass in our normal union type, and then say which members we want to remove from it in the second argument
 */
const exUserInfo: Exclude<ExUserInfo, IExUserInfoB> = {
  email: 'mail@mmm.com',
  name: 'huy',
  age: 12,
}

console.log('exUserInfo: ', exUserInfo);


// EXAMPLE 3
interface Water { healthiness: 1000 }
interface Lemonade { healthiness: 500 }
interface Tea { healthiness: 1250 } // really it depends on what kind of tea

interface Soda { healthiness: -1000 }
interface Coke extends Soda { fizziness: 1000 }
interface DrPepper extends Soda { fizziness: 800 }
interface Pepsi extends Soda { fizziness: 750 }

type Drinks = Water | Lemonade | Tea | Soda | Coke | DrPepper | Pepsi;
type NoGenericSodaBad = Exclude<Drinks, Soda> | Coke | DrPepper | Pepsi;
