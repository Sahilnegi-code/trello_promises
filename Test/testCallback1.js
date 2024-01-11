

const testCallBack1 =  require('../callback1');


testCallBack1( "mcu453ed"  ,  ( val ) => {
    if( val === false){
        console.log( 'Empty Data' );
    }
    else{
        console.log( val );
    }

} ); 
module.exports = testCallBack1;