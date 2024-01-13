const { cards } = require("./Test/data");

function callBack5() {
  let temp = [];
  setTimeout(() => {

    const callback1 = require('./Test/testCallback1');
    callback1( "mcu453ed");
    const callback2 = require("./callback2");
    const thanosLists = callback2("mcu453ed");
    console.log(thanosLists);

    let obj = thanosLists.filter((curr, index) => {
      return curr.name === "Mind" || curr.name === 'Space';
    });

    const tempResult  = new Promise(( resolve  , reject )=>{
      let result = [];
      obj.map( ( elem ) =>{
   
        result.push(cards[elem.id]);
        
      })

      resolve(result);
    } );

    tempResult.then((data)=>{
      console.log( data);
    })
    .catch((err)=>{
      console.log(err);
    })

  }, 3000);
};
callBack5();
module.exports = callBack5;
