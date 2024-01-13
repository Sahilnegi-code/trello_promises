const { cards, lists_1 } = require("./Test/data");

function callBack6() {
  let temp = [];
  setTimeout(() => {
    const callback1 = require("./Test/testCallback1");

    callback1("mcu453ed");
    const callback2 = require("./callback2");

    const thanosLists = callback2("mcu453ed");

    let obj = thanosLists.filter((curr, index) => {
      return curr.name === "Mind" || curr.name === "Space";
    });

    let id = [];

    Object.values(lists_1).forEach((arr) => {
      arr.forEach((element) => {
        id.push(element.id);
      });
    });

    let resultObj = [];
    let resultObjPromise = new Promise((res, rej) => {
      id.forEach((idVal) => {
        if (cards.hasOwnProperty(idVal)) {
          let cardsValue = cards[idVal];
          cardsValue.forEach((objectInform) => {
            resultObj.push(objectInform);
          });
        }
      });
      res(resultObj);
    });

    resultObjPromise.then((val) => {
      console.log(val);
    });
  }, 3000);
}
callBack6();
module.exports = callBack6;
