const { cards } = require("./Test/data");

function callBack5(cb) {
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
      return curr.name === "Mind" || curr.name === 'Space';
    });

let result = [];
obj.map( ( elem ) =>{
    let tempId = elem.id;
    result.push(cards[tempId]);
})

    cb(result)

  }, 3000);
};

module.exports = callBack5;
