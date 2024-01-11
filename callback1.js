const {board} = require('./Test/data')
 const callback1 = (  id ,cb) =>{

    const informId = board.filter(( boardKey  ) => boardKey.id === id );
    cb( informId[0] || null );
return informId[0];
 }
 module.exports = callback1;