const { cards ,lists_1 } = require("./Test/data");


function callBack5(cb) {
  let temp = [];
  setTimeout(() => {
    const callback1 = require("./Test/testCallback1");

    callback1("mcu453ed", (val) => {
      if (val === false) {
        console.log("Empty Data");
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
      return curr.name === "Mind" || curr.name === "Space";
    });

    let id = [];

    Object.values((lists_1)).forEach((arr) => {
        arr.forEach((element)=>{
            id.push(element.id);
        })
    })

    let resultObj = []; 
      id.forEach( (idVal)=>{

        if( cards.hasOwnProperty(idVal)  ){
            let cardsValue = cards[idVal]; 
            cardsValue.forEach((objectInform)=>{
                resultObj.push(objectInform);
            });

        }

      } )  
        
      
;

   cb(resultObj)
  }, 3000);
}
module.exports = callBack5;
