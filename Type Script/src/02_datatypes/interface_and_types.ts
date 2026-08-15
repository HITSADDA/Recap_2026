type UserType = {
  username: string;
  email: string;
  age: number;
};

type ExtraInfo = {
  city: string;
};

type SkinColor = "Brown" | "White" | "Black";

class UserOne implements UserType {
  username: string = "";
  age: number = 12;
  email: string = "test@test.com";
}

// Error
// class UserTwo implements SkinColor {
// }

type NewUserTypes = UserType & ExtraInfo;

class UserThree implements NewUserTypes {
  username: string = "";
  age: number = 12;
  email: string = "test@test.com";
  city: string = "";
}

type UserTInterface = {
  username: string;
  email: string;
  age: number;
};

type ExtraInfoType = {
  city: string;
};

class UserTwo implements UserTInterface {
  username: string = "";
  age: number = 12;
  email: string = "test@test.com";
}

type UserNewType = UserTInterface & ExtraInfoType;

class UserFour implements UserNewType {
  username: string = "";
  age: number = 12;
  email: string = "test@test.com";
  city: string = "New Delhi";
}
