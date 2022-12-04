/*
comentario
*/
//tipo de datos
var nom = "carlos";
console.log(nom);

//tipo de datos num
var num = 50;
console.log(num);

//tipo de dato obj
var obj = {
    nombre : "juan",
    num : 93127648
}
console.log(obj);
console.log(typeof obj);

//tipo de dato boolean
var buleano = true;
console.log(buleano, typeof buleano);

//tipo de dato function 
function miFun(){
}
console.log(miFun, typeof miFun);

//tipo de datos symbol
var simb = Symbol("mi simbolo");
console.log(simb, typeof simb);

//tipo clase es una funcion
class Pers{
    nom;
    apel;
    constructor(nom, apel){
        this.nom = nom;
        this.apel =apel;
    }
}
console.log(Pers, typeof Pers);

//tipo indefinido
var jota;
console.log(jota, typeof jota);
jota = undefined;
console.log(jota);

//null auscenia de valor
var casjota = null;
console.log(casjota, typeof casjota);

//cadena vacia
var jaru = '';
console.log(jaru);

//arreglos
var autos = ['bmw', "audi"];
console.log(autos, typeof autos);
 
//concatenacion
tec1 = "juan";
tec2 = "pepito";
var tecs = tec1 + ' ' + tec2;
console.log(tecs);

var num = 5;
var num2 = 1;
console.log("a" + (num + 1))






