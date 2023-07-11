/**
 * Exclude does the opposite of extract. It allows you to generate a new type by excluding a type.
 */
type MovieCharactersExclude =
  | 'Harry Potter'
  | 'Tom Riddle'
  | { firstname: string; name: string };

type hpCharactersExclude = Exclude<MovieCharactersExclude, string>;
// equal to type hpCharacters = {firstname: string; name: string };

type hpCharactersExclude1 = Exclude<MovieCharactersExclude, { firstname: string }>;
// equal to type hpCharacters = 'Harry Potter' | 'Tom Riddle';
