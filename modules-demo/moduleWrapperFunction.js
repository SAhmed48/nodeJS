// How nodeJS wraps module into function to execute it.


// Immediate function
(function (exports, require, module, __dirname, __filename){

  console.log(__dirname); // complete directory path
  console.log(__filename); // complete file path
    
  function anyFunc(){
      
   }
   module.exports = anyFunc;
});