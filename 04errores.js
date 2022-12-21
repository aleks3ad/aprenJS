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

//timeout: subrutina se inicie auto.. en un t
// setTimeout(()=>console.log("1er"),2000);
// setTimeout(()=>console.log("2do"),1000);

//setInterval subrutina se inicie auto y repe
//Ctrl+c para detener (asincrona)
// setInterval(()=>console.log("1er"),1000);