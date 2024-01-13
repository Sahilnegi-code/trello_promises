// Importing the 'cards' and 'lists_1' objects from the specified file
const { cards, lists_1 } = require("./Test/data");

// Defining a callback function
function callBack6() {
  // Creating an empty array 'temp' (not used in the current code)
  let temp = [];

  // Delaying execution by 3000 milliseconds (3 seconds)
  setTimeout(() => {
    // Importing 'callback1' from the specified file and invoking it with a specific parameter
    const callback1 = require("./Test/testCallback1");
    callback1("mcu453ed");

    // Importing 'callback2' from the specified file and invoking it with a specific parameter
    const callback2 = require("./callback2");
    const thanosLists = callback2("mcu453ed");

    // Filtering the 'thanosLists' array to find objects with 'name' equal to "Mind" or "Space"
    let obj = thanosLists.filter((curr, index) => {
      return curr.name === "Mind" || curr.name === "Space";
    });

    // Extracting 'id' values from 'lists_1' and storing them in the 'id' array
    let id = [];
    Object.values(lists_1).forEach((arr) => {
      arr.forEach((element) => {
        id.push(element.id);
      });
    });

    // Creating an array to store result objects
    let resultObj = [];

    // Creating a promise to handle asynchronous operations
    let resultObjPromise = new Promise((resolve, reject) => {
      // Iterating through 'id' array and populating 'resultObj' with corresponding 'cards' values
      id.forEach((idVal) => {
        if (cards.hasOwnProperty(idVal)) {
          let cardsValue = cards[idVal];
          cardsValue.forEach((objectInform) => {
            resultObj.push(objectInform);
          });
        }
      });

      // Resolving the promise with the populated 'resultObj' array
      resolve(resultObj);
    });

    // Handling the result of the promise using 'then' method
    resultObjPromise.then((val) => {
      // Logging the resolved value to the console
      console.log(val);
    });
  }, 3000); // End of setTimeout
}

// Invoking the callback function
callBack6();

// Exporting the callback function for external use
module.exports = callBack6;
