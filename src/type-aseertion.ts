/**
 * Type assertion allows you to set the type of a value and tell the compiler not to infer it. 
 * This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own
 */
const input = document.getElementById('input-field');
// input2.value -> error Property 'value' does not exist on type 'HTMLElement'.

// There are two ways to do type assertion in TypeScript:

// Using the angular bracket <> syntax. So far in this section, we have used angular brackets to show type assertion.
const inputBracket = <HTMLInputElement> document.getElementById('input-field');
inputBracket.value;

// Using the angular bracket <> syntax. So far in this section, we have used angular brackets to show type assertion.
const inputAs = document.getElementById('input-field') as HTMLInputElement;
inputAs.value;