// Importing the 'cards' object from the specified file
const { cards } = require("./Test/data");

// Defining a callback function
function callBack5() {
  // Creating an empty array 'temp' (not used in the current code)
  let temp = [];

  // Delaying execution by 3000 milliseconds (3 seconds)
  setTimeout(() => {
    // Importing 'callback1' from the specified file and invoking it with a specific parameter
    const callback1 = require('./Test/testCallback1');
    callback1("mcu453ed");

    // Importing 'callback2' from the specified file and invoking it with a specific parameter
    const callback2 = require("./callback2");
    const thanosLists = callback2("mcu453ed");
    console.log(thanosLists);

    // Filtering the 'thanosLists' array to find objects with 'name' equal to "Mind" or "Space"
    let obj = thanosLists.filter((curr, index) => {
      return curr.name === "Mind" || curr.name === 'Space';
    });

    // Creating a promise to handle asynchronous operations
    const tempResult = new Promise((resolve, reject) => {
      let result = [];

      // Mapping through 'obj' array and pushing corresponding 'cards' based on 'id'
      obj.map((elem) => {
        result.push(cards[elem.id]);
      });

      // Resolving the promise with the final 'result' array
      resolve(result);
    });

    // Handling the result of the promise using 'then' and 'catch' methods
    tempResult.then((data) => {
      // Logging the resolved data to the console
      console.log(data);
    })
    .catch((err) => {
      // Logging the rejected value to the console
      console.log(err);
    });

  }, 3000); // End of setTimeout
}

// Invoking the callback function
callBack5();

// Exporting the callback function for external use
module.exports = callBack5;
