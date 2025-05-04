const arr: Readonly<{  name: string, age: number }> = { name: 'Alice', age: 30 };

// Error Cannot assign to name because it is a read-only property.
// arr.name = 1;

const arrNumber: ReadonlyArray<number> = [1, 2, 3];
// Error -> Property push does not exist on type readonly number[]
// arrNumber.push(4);

// 
interface Point {
    x: number;
    y: number;
}

type ReadonlyPoint = Readonly<Point>;