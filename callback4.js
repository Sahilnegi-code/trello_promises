const { cards } = require("./Test/data");
const callBack4 = () => {
  let temp = [];
  setTimeout(() => {
    const callback1 = require('./Test/testCallback1');
callback1( "mcu453ed"  ,  ( val ) => {
    if( val === false){
        console.log( 'Empty Data' );
    }
});
    const callback2 = require("./callback2");

    const thanosLists = callback2("mcu453ed", (val) => {
      if (val === false) {
        console.log("Empty Data");
      }
    });
    console.log(thanosLists);

    let obj = thanosLists.filter((curr, index) => {
      return curr.name === "Mind";
    });

    let tempId = obj[0].id;
    console.log(cards[tempId]);
  }, 3000);
};

callBack4();
module.exports = callBack4;
