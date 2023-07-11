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
  // change value for private property in class
  counter["_value"] = -100;
  
  console.log(counter.count);