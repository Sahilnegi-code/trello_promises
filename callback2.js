const { lists_1 } = require("./Test/data");
const callback2 = (id) => {
  let result = lists_1[id];
  const resultOfPromise = new Promise( ( response  , reject ) =>{

    if( result ) {
      response(result);
    }else{
      reject(null);
    } 
  } )
  
resultOfPromise
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err);
})

  return result;
};
module.exports = callback2;
