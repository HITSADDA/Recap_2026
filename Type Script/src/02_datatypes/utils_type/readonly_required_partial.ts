type UserType = {
    username: string;
    email?: string;
    password: string;
}

//  @@@@@@@ Readonly

type ReadonlyUserType = Readonly<UserType>;

const user: ReadonlyUserType = {
    username: 'John Doe',
    email: 'adfkjskdfj',
    password: 'password123'
}


//  @@@@@@@ Required

type RequiredUserType = Required<UserType>;

const user2: RequiredUserType = {
    username: 'John Doe',
    email: 'adfkjskdfj',
    password: 'password123'
}

//  @@@@@@@ Partial

type PartialUserType = Partial<UserType>;

const user3: PartialUserType = {
    username: 'John Doe',
    email: 'adfkjskdfj'
}