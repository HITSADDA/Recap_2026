function setUsername(username) {
    this.username = username;
}

function createUser(username, email) {
    setUsername.call(this, username);
    this.email = email;
}


const user = new createUser('john_doe', 'hii@hii.com');

console.log(user);


const person1 = {
  firstName: "John",
  lastName: "Doe",
  greet: function(greeting) {
    console.log(`${greeting}, my name is ${this.firstName} ${this.lastName}`);
  }
};

const person2 = {
  firstName: "Jane",
  lastName: "Smith"
};

person1.greet.call(person2, "Hello"); 