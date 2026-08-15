// Union |
type UserIdType = string | number;
const userId1: UserIdType = 238784239;
const userId2: UserIdType = "238784239";

// Intersection
type User = { name: string; age: number };
type UserWithId = User & { id: number };
const userWithId: UserWithId = { id: 1, name: "John", age: 30 };