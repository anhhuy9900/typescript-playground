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