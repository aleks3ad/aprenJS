//codigo q tiene varios estados
//inicia:estado pendiente
//estado resuelta / rechazada

// let promesa = new Promise((resolved,rejected) =>{
//     let casar = false;
//     if(casar){
//         resolved('resuelta')
//     } else {
//         rejected('rechazado')
//     }
// });
// promesa.then(
//     valor => console.log(valor)
// ).catch(valor=>console.log(valor))

//────────────────────────────────────
// console.log("inicio");
// setTimeout(()=>console.log("hola"),2000);
// console.log("fin");
//────────────────────────────────────
// await para esperar por una promesa
async function promesa2(){
    let ale2 = new Promise( resolved2 =>{
        setTimeout(()=>resolved2('resuelta con await'),2000);
    });
    console.log("1er");
    console.log( await ale2 );
    console.log("2da");
}
promesa2();