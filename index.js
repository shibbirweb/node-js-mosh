console.log("Before");
getUser(1, (user) => {
  console.log(user);

  // get the repositories
  getRepositories(user.gitHubUsername, (repositories) => {
      console.log(repositories);
  });
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database...");
    callback({
      id: id,
      gitHubUsername: "shibbir",
    });
  }, 2000);
}

function getRepositories(username, callback){
    setTimeout(() => {
        console.log('Calling GitHub API...');
        const repositories = ['repo1', 'repo2', 'repo3'];
        callback(repositories);
    }, 2000);
}
