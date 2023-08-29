/**
 * Using Pick, we can tell TypeScript just to pick those particular Keys from our existing Type (which could be an interface or type).
 */

type PickType = {
    a: string;
    b: string;
    c: string;
    d: string 
};

type userPickType = Pick<PickType, 'a' | 'b'>;
const userDataPickType: userPickType = {
    a: 'a',
    b: 'b'
};