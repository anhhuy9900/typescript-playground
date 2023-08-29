/**
 * Required does the opposite of Partial. It takes an existing interface with optional properties and transforms it into a type where all properties are required
 */

interface MovieCharacter {
  firstName?: string;
  name?: string;
  movie?: string;
}

function hireActor(character: Required<MovieCharacter>) {}

// 👍
hireActor({
  firstName: "Huy",
  name: "Test",
  movie: "The Lord of the Rings",
});

// 👎
hireActor({
  firstname: "Huy",
  name: "Test",
});
