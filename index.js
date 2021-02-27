console.log("Before");
const user = getUser(1);
console.log(user);
console.log("After");

// Callback
// Promises
// Async/await

function getUser(id) {
  setTimeout(() => {
    console.log("Reading a user from database...");
    return {
        id: id,
        gitHubUsername: 'shibbir'
    }
  }, 2000);
}
