// NonNullable<T>
// Constructs a type by excluding null and undefined from Type.
// It allows you to remove null and undefined from the type T.
type NonNullableType = string | number | null | undefined;

function showType(args: NonNullable<NonNullableType>) {
  console.log(args);
}

showType("test");
// Output: "test"

// showType(null)
// Error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

// showType(undefined)
// Error: Argument of type 'undefined' is not assignable to parameter of type 'string | number'.