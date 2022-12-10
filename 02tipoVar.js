// 'var' en desuso
// 'let' ahora para asignar var
//'const' es una constante
let a = 3, b = 3, c="3";
nom = a==c; //revisa el valor, no importa el tipo
console.log(nom);
nom = a===c;//revisa el valor, importa el tipo
console.log(nom);

//convert string a integer
a ="10+"
a = Number(a)
if(isNaN(a))
    console.log(a + " no es numero oe")
else
    console.log(a + " es un numero")

//uso de continue
for(let i=0; i<=10; i++){
    if(i % 2 !==0) //si es impar continuar index
        continue;
    console.log(i);
}

//funciones 1
a = function hola(){return "abc"};

//funciona 2
function suma(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++)
        sum += arguments[i];
    return sum;
}
console.log(suma(5,8,6));

//funciones 3
a = (a,b) => a + b;
console.log(a(5,7));

//object
persona = new Object();
persona.nom ="ale"
persona.edad = 12
delete persona.nom;
for(n in persona){
    console.log(persona[n]);
}

