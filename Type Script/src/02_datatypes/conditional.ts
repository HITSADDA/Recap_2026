// Conditional Types
type conditionalType<T> = T extends string ? string : number;
const optionalString: conditionalType<string> = "String Type";
const optionalNoStringt: conditionalType<number> = 44;

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// Exclude
// type Exclude<T, U> = T extends U ? never : T; //thats how it works
type One = "one" | "two" | "three";
type Four = "two" | "four";
type ExcludeFour = Exclude<One, Four>; // "one" | "three"

let a: ExcludeFour = "one"; // Valid
let b: ExcludeFour = "three"; // Valid
// let c: ExcludeFour = "two"; // Invalid, TypeScript will throw an error

console.log(a); // Output: "one"
console.log(b); // Output: "three"
// console.log(c); // This line will cause a TypeScript error and won't compile`

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------


// Extract -> Just like not matching for T to U

type ExtractValueType = Extract<One, Four>;
let d : ExtractValueType = "two"


// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// NonNullable -> NonNullable<T> = T extends null | undefined ? never : T
type NonNullableType = NonNullable<{name: string}>
let nonNullUser: NonNullableType = {name: 'asfdasf sdafsad fsda fas'}


// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// Infer -> 

function add(a: number, b: number): number {
    return a + b;
}

type Add = ReturnType<typeof add>; // this uses infer in Backend
//  ^? 

type AddTwo = MyReturnType<typeof add>; // this uses infer in Backend

// type MyReturnType<T> = T extends (...args: any[]) => infer any ? any : never;
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;



// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// Partial -> Makes every property Optional

type User = {
    username?: string;
    age: number
}

type User2 = Partial<User>

let newUser: User = {
    age: 23
}

let newUser2: User2 = {}