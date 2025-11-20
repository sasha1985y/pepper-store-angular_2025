function foo() {
  console.log(this.a);
}

const objA = {
  method: foo,
  a: 1,
}

const objB = {
  method: foo,
  a: 2,
}

foo();
objA.method();
objB.method();
