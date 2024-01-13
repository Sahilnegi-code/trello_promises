// Importing the 'cards' object from the specified file
const { cards } = require("./Test/data");

// Defining a callback function that takes an 'id' parameter
const callback3 = (id) => {
  // Retrieving the value from 'cards' based on the provided 'id'
  const cardIdInformation = cards[id];

  // Creating a promise to handle asynchronous operations
  let cardIdInformationPromise = new Promise((resolve, reject) => {
    // Checking if 'cardIdInformation' is truthy (i.e., a value exists for the given 'id')
    if (cardIdInformation) {
      // Resolving the promise with the found value
      resolve(cardIdInformation);
    } else {
      // Rejecting the promise if no value is found for the given 'id'
      reject(null);
    }
  });

  // Handling the result of the promise using 'then' and 'catch' methods
  cardIdInformationPromise
    .then((data) => {
      // Logging the resolved value to the console
      console.log('Data ', data);
    })
    .catch((err) => {
      // Logging the rejected value (null) to the console
      console.log('err ', err);
    });

  // Returning the retrieved 'cardIdInformation' value
  return cardIdInformation;
};

// Exporting the callback function for external use
module.exports = callback3;
