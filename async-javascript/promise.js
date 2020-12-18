const prmse = new Promise((resolve, reject) => {

    // some async code
    setTimeout(() => {
        resolve(1); // resolve promise successfully.
    }, 3000);
    // reject(new Error('Something went wrong.'));
});

prmse.then(resp => { console.log("promise Success.")})
     .catch(err => { console.log("promise Error")})