// Any
let x: any = 5;
x++;
x.toUpperCase();
x.toFixed();

// Unknown
let y: unknown = "5";
if (typeof y === "string") y.concat(" Hii");
if (typeof y === "number") y++;
if (typeof y === "boolean") y.valueOf;


// Never
type zType = number & string; // an type cannot be both number & string

// let z: zType = "hii";
// let z: zType = 55;