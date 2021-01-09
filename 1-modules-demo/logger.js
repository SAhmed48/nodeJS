const localVariable = 'Hello world';

function logErrors(error){
    console.log('Error from logger:', error);

}


// export module
// module.exports = {
//     variable: localVariable,
//     logErrors: logErrors
// }

// direct export function 

module.exports = logErrors;