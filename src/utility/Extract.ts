/**
 * Extract allows you to extract typing information from a type. 
 * Extract accepts two Parameters, first the Interface and second the type that should be extracted
 */

type MovieCharacters =
  | 'Harry Potter'
  | 'Tom Riddle'
  | { firstname: string; name: string };

type hpCharacters = Extract<MovieCharacters, string>;
// equal to type hpCharacters = 'Harry Potter' | 'Tom Riddle';

type hpCharacters = Extract<MovieCharacters, { firstname: string }>;
// equal to type hpCharacters = {firstname: string; name: string };
