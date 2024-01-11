
const testCallBack2 =  require('../callback2');

testCallBack2( "mcu453ed"  ,  ( val ) => {
    if( val === false){
        console.log( 'Empty Data' );
    }
    else{
        console.log(val);
    }

} ); 
