function sum_or_concat<T>(a: T, b: T): T {
  if(typeof a === "number" && typeof b === "number") {
    return (a + b) as T;
  } else if(typeof a === "string" && typeof b === "string") {
    return (a + b) as T;
  } else{
    return 0 as T;
  }
}

let a = sum_or_concat(5, 10); // returns 15
console.log(a)

let b = sum_or_concat("Hello, ", "World!"); // returns "Hello, World!"
console.log(b)



function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}