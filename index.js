function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFn() {
      console.log("this is the first fuction");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => console.log("this is an unknown function");
  }