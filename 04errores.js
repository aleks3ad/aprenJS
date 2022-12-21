//modo estricto
'use strict'

try{
    let x="10";
    if(isNaN(x)){
        throw "no es numero"
    }
} catch(error){
    console.log(error);
} finally {
    console.log("siempre x aqui, incluso el codigo ponga barreras");
}

//uso de funcion flecha
//1
let funFlecha = () =>{
    console.log("funcion flecha");
}
funFlecha();
//2 una sola linea
const funflecha2 = () => console.log("flecha2");
funflecha2();
//3 return
let funflecha3 = () => "flecha3";
console.log(funflecha3());

//uso de timeout
setTimeout(()=>console.log("hola"),1000)