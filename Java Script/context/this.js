const user = {
  username: "john_doe",
  price: 29.99,

  welcomeMessage: function () {
    console.log(
      `Welcome, ${this.username}! Your current price is $${this.price}.`,
    );
  },
};

user.welcomeMessage();
console.log(this);