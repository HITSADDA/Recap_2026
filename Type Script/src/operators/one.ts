// Keyof Operator
type Person = { name: string; age: number };
type PersonKeys = keyof Person;
const user: PersonKeys = "name";

// Mapped Types
type Optional<T> = { [K in keyof T]?: T[K] };
const optionalUser: Optional<Person> = { name: "John" };

// Conditional Types
type conditionalType<T> = T extends string ? string : number;
const optionalString: conditionalType<string> = "String Type";
const optionalNoStringt: conditionalType<number> = 44;