// Importing the 'lists_1' object from the specified file
const { lists_1 } = require("./Test/data");

// Defining a callback function that takes an 'id' parameter
const callback2 = (id) => {
  // Retrieving the value from 'lists_1' based on the provided 'id'
  let result = lists_1[id];

  // Creating a promise to handle asynchronous operations
  const resultOfPromise = new Promise((resolve, reject) => {
    // Checking if 'result' is truthy (i.e., a value exists for the given 'id')
    if (result !== undefined) {
      // Resolving the promise with the found value
      resolve(result);
    } else {
      // Rejecting the promise if no value is found for the given 'id'
      reject(null);
    }
  });

  // Handling the result of the promise using 'then' and 'catch' methods
  resultOfPromise
    .then((data) => {
      // Logging the resolved value to the console
      console.log(data);
    })
    .catch((err) => {
      // Logging the rejected value (null) to the console
      console.log(err);
    });

  // Returning the retrieved 'result' value
  return result;
};

// Exporting the callback function for external use
module.exports = callback2;
