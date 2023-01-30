/**
 * Exclude does the opposite of extract. It allows you to generate a new type by excluding a type.
 */
type MovieCharacters =
  | 'Harry Potter'
  | 'Tom Riddle'
  | { firstname: string; name: string };

type hpCharacters = Exclude<MovieCharacters, string>;
// equal to type hpCharacters = {firstname: string; name: string };

type hpCharacters = Exclude<MovieCharacters, { firstname: string }>;
// equal to type hpCharacters = 'Harry Potter' | 'Tom Riddle';
