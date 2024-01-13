// Importing the 'cards' object from the specified file
const { cards } = require("./Test/data");

// Importing 'callback1' from the specified file
const callback1 = require("./Test/testCallback1");

// Importing 'callback2' from the specified file
const callback2 = require("./callback2");

// Defining a callback function
const callBack4 = () => {
  // Creating an empty array 'temp'
  let temp = [];

  // Delaying execution by 6000 milliseconds (6 seconds)
  setTimeout(() => {
    // Invoking 'callback1' function
    callback1();

    // Invoking 'callback2' function with a specific parameter
    const thanosLists = callback2("mcu453ed");

    // Filtering the 'thanosLists' array to find objects with 'name' equal to "Mind"
    let obj = thanosLists.filter((curr, index) => {
      return curr.name === "Mind";
    });

    // Creating a promise to handle asynchronous operations
    let tempId = new Promise((resolve, reject) => {
      // Checking if 'obj[0].id' is truthy (i.e., an 'id' property exists in the object)
      if (obj[0].id) {
        // Resolving the promise with the found 'id'
        resolve(obj[0].id);
      } else {
        // Rejecting the promise if no 'id' is found
        reject(null);
      }
    });

    // Handling the result of the promise using 'then' and 'catch' methods
    tempId
      .then((data) => {
        // Logging the resolved 'id' to the console
        console.log(data);
      })
      .catch((err) => {
        // Logging the rejected value (null) to the console
        console.log(err);
      });
  }, 6000); // End of setTimeout
};

// Exporting the callback function for external use
module.exports = callBack4;
