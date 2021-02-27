// Asynchronous
console.log("Before");
/* getUser(1, (user) => {
  console.log(user);

  // get the repositories
  getRepositories(user.gitHubUsername, (repositories) => {
      getCommits(repository, (commits) => {
          // CALLBACK HELL
      })
  });
}); */

// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repositories => getCommits(repositories[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(error => console.log('Error', error.message));

// Async and Await approach
async function displayCommits(){
    try {
        const user = await getUser(1);
        const repositories = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repositories[0]);
        console.log(commits);

    } catch (error) {
        console.log("Error", error.message);
    }
    
}

displayCommits();

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
            //resolve(repositories);
            reject(new Error('Something failed'));
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