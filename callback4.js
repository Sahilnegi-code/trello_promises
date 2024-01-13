const { cards } = require("./Test/data");
const callBack4 = () => {
  let temp = [];
  setTimeout(() => {
    const callback1 = require("./Test/testCallback1");
    callback1();

    const callback2 = require("./callback2");

    const thanosLists = callback2("mcu453ed");

    let obj = thanosLists.filter((curr, index) => {
      return curr.name === "Mind";
    });

    let tempId = new Promise((res, rej) => {
      if (obj[0].id) {
        res(obj[0].id);
      } else {
        rej(null);
      }
    });

    tempId
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, 6000);
};
module.exports = callBack4;
