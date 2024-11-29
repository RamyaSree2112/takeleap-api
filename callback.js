// This is the callback function
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // This is the function that accepts the callback
  function processUserInput(callback) {
    const userName = 'Alice';
    callback(userName);  // Calling the callback with userName as argument
  }
  
  // Passing the greet function as a callback
  processUserInput(greet);
  