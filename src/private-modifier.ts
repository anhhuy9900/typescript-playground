class Counter {
    private _value = 0;
  
    increment() {
      this._value += 1;
    }
  
    get count() {
      return this._value;
    }
  }
  
  const counter = new Counter();
  counter.increment();
  counter.increment();
  counter.increment();

  //increment -> _value:  3
  // error TS2341: Property '_value' is private and only accessible within class 'Counter'.
  console.log('increment -> _value: ', counter.count);

  // we can't change value fo priavte property
  // counter._value = 100; 

  // but we can change value for private property in class -> use this way
  counter["_value"] = -100;
  
  // _value : -100
  console.log('_value :', counter.count);