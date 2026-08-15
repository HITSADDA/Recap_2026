//  @@@@@@@ PICK
    // Pick is a Utility type that allows you to create a new type by selecting specific properties from an existing type of interface.

type User = {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
}

type OnlyUserNameAndEmail = Pick<User, 'name' | 'email'>;

const user1: OnlyUserNameAndEmail = {
    name: 'John Doe',
    email: 'akdjfl@g.com'
}


//  @@@@@@@ Omit
    // Omit is a utility type that allows us to create a new type by excluding specific properties from extisting type or interface.


type UserWithoutPassword = Omit<User, 'password'>;

const user2: UserWithoutPassword = {
    name: 'John Doe',
    email: 'akdjfl@g.com',
    age: 30,
    isAdmin: true,
    createdAt: new Date()
}