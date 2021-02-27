// Asynchronous
console.log("Before");
getUser(1, (user) => {
  console.log(user);

  // get the repositories
  getRepositories(user.gitHubUsername, (repositories) => {
      getCommits(repository, (commits) => {
          // CALLBACK HELL
      })
  });
});
console.log("After");



function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading a user from database...");
            resolve({
              id: id,
              gitHubUsername: "shibbir",
            });
          }, 2000);
    });
  
}

function getRepositories(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            const repositories = ['repo1', 'repo2', 'repo3'];
            resolve(repositories);
        }, 2000);
    });
}

function getCommits(repository){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['Commit']);
        }, 2000);
    })
}