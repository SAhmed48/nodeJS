const promise = new Promise((resolve, reject) => {

    // some async code
    setTimeout(() => {
        resolve(1); // resolve promise successfully.
    }, 3000);
    // reject(new Error('Something went wrong.'));
});

promise.then(resp => { console.log("promise Success.")})
       .catch(err => { console.log("promise Error")})


// Multiple backend calls handle using promises

function getUser(id){
    return new Promise((resolve, reject) => {
        resolve({id: id, username: 'dev-salmanahmed'});
    });
}

function getUserProfileDetails(id){
    return new Promise((resolve, reject) => {
        resolve({id: id, username: 'dev-salmanahmed', address: 'xyz' });
    });
}

function getUserFullAddress(id){
    return new Promise((resolve, reject) => {
        resolve({id: id, city: 'xyz', state:'abc', country: 'cdfe'});
    });
}

const user = getUser(id);
const profileDetails = getUserProfileDetails(user.id);
const fullAddress = getUserFullAddress(user.id);

user.then(response => getUserProfileDetails(user.id))
    .then(resp => getUserFullAddress(resp.id))
    .then(res => console.log(res))
    .catch(err => console.log('Error occurs', err));