const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise One Resolved");
  }, 1000);
});

promiseOne
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

const promiseTwo = new Promise((resolve, reject) => {
  // Some Database Request
  const user = {
    name: "John Doe",
    age: 30,
  };

  const error = false;

  if (!error) {
    resolve(user);
  } else {
    reject("Error: Something went wrong");
  }
});

promiseTwo
  .then((user) => {
    console.log("Promise Two Resolved");
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.error(error);
  });

const promiseThree = new Promise((resolve, reject) => {
  const user = {
    name: "John Doe",
    age: 30,
  };

  const error = true;

  if (!error) {
    resolve(user);
  } else {
    reject("Error: Something went wrong");
  }
});

async function handlePromiseThree() {
  try {
    const user = await promiseThree;
    console.log("Promise Three Resolved");
    console.log(user);
  } catch (error) {
    console.error("Promise Three Rejected");
    console.error(error);
  }
}
