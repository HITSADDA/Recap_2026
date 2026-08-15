// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@ IMPLEMENTATION OF RECORD TYPE @@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

type _Record<K extends keyof any, T> = {
    [P in K]: T;
}


const user_with_age: _Record<string, number> = {
    vishal: 33,
    youvraj: 23
}


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@ Built in Genaric method Types @@@@@@@@@@@@@@@@@@@@@@@

const user_with_age2: Record<string, number> = {
    vishal: 33,
    youvraj: 23
}