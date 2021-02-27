const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2)
    }, 2000)
});

Promise.race([p1, p2])
.then(result => {
    console.log(result);
})
.catch(error => console.log(error.message));