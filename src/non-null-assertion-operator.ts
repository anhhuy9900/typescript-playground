let counterVal: number | null;

// Variable 'counterVal' is used before being assigned
// counterVal?.toString(); // 👎

// This is going to tell to Typescript compiler will be ignore this error
counterVal!.toString(); // 👍