// Importing the 'board' object from the specified file
const { board } = require("./Test/data");

// Defining a callback function that takes an 'id' parameter
const callback1 = (id) => {
  // Filtering the 'board' array to find an object with matching 'id'
  let informId = board.filter((boardKey) => boardKey.id === id);

  // Creating a promise to handle asynchronous operations
  const resultOfPromise = new Promise((res, rej) => {
    // Checking if 'informId' is truthy (i.e., an object with the given 'id' exists)
    if (informId.length > 0) {
      // Resolving the promise with the found object
      res(informId);
    } else {
      // Rejecting the promise if no matching object is found
      rej(null);
    }
  });

  // Handling the result of the promise using 'then' and 'catch' methods
  resultOfPromise
    .then((val) => {
      // Logging the resolved value (found object) to the console
      console.log(val);
    })
    .catch((err) => {
      // Logging the rejected value (null) to the console
      console.log(err);
    });

  // Returning the filtered 'informId' array (this may be an empty array if no match is found)
  return informId;
};

// Exporting the callback function for external use
module.exports = callback1;
