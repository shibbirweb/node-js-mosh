console.log("Before");
getUser(1, getRepositories);
console.log("After");

function getRepositories(user){
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repositories){
    getCommits(repository, displayCommits)
}

function displayCommits(commits){
    console.log(commits);
}


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
