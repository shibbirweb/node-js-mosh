const p = Promise.reject(new Error('reason for rejection....'));

p.catch(error => console.log(error.message));

