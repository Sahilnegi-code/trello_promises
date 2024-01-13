const { cards } = require("./Test/data");
const callback3 = (id) => {
  const cardIdInformation = cards[id];

 let cardIdInformationPromise = new Promise( ( res , rej ) =>{
    if( cardIdInformation) {
      res(cardIdInformation)
    }
    else{
      rej(null);
    }
  }) 



  cardIdInformationPromise.then( (data)=>{
    console.log( 'Data ' , data);
  } )
  .catch((err)=>{
    console.log( 'err ' , err  );
  })
 


  return cardIdInformation;
};

module.exports = callback3;
