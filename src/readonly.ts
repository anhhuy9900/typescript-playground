type ValueReadonly = {
    readonly foo: string,
    readonly bar: string
}

// set a object normal 
const getValue = {
    foo: 'Foo',
    bar: 'bar'
}
getValue.bar = 'bar 1';
getValue.foo= 'Foo 2';

// But when we assign readonly type for this variable getValue 
// and if we will try assign new value for it it will show error
const getNewValue:ValueReadonly = {
    foo: 'Foo',
    bar: 'bar'
}

// getNewValue.bar = 'bar 1';
// getNewValue.foo= 'Foo 2';