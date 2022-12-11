class Per{
    constructor(nom,ape){
        this._nom=nom;
        this._ape=ape;
    }
    get nom(){        return this._nom;}
    set nom(nom){        this._nom=nom;}
    get ape(){        return this._ape;}
    set ape(ape){        this._ape=ape;}
    datos(){return this._nom + ' ' + this._ape;}
}

class empleado extends Per{
    constructor(nom2,ape2,id){
        super(nom2,ape2);
        this._id=id;
    }
    get id(){       return this._id;}
    set id(id){         this._id=id;}
    datos(){return super.datos() + '_' + this._id;}
}

let oEmple= new empleado("ale","dia",7722);
console.log(oEmple.id);
console.log(oEmple.datos());


//───────────────────────────────────────────
//static solo puede ser llamado x una clase
//usualemente un var static se usa para conteo de obj
//metodos static no es necesario parentesis
class Animal{
    static cont=0;
    constructor(nom,edad){
        this._nom=nom;
        this._edad=edad;
        this.id = Animal.cont++;
        console.log(this.id);
    }
}
oAni = new Animal("Z",13);
oAni = new Animal("y",5);
oAni = new Animal("J",3);

//───────────────────────────────────────────
class Mueble{
    static CONT=1;
    static MAXCONT=3;
    constructor(color){
        this._color=color;
        if(Mueble.CONT<Mueble.MAXCONT){            
            this._id=Mueble.CONT++;
        }
    }
    toString(){
        return this._id + ' ' + this._color
    }
}
silla = new Mueble("rojo")
mesa = new Mueble("azul")
escri = new Mueble("verde")
console.log(mesa.toString());
console.log(escri.toString());
