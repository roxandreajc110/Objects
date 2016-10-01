// jshint esversion: 6
var Animal= function(
  nombre=null,
  numero_de_patas=4,
  carnivoro=true,
  pelaje=true,
  numero_de_ojos=8
  ){

    var object={
      numero_de_patas:numero_de_patas,
      carnivoro:carnivoro,
      pelaje:pelaje,
      numero_de_ojos:numero_de_ojos,
      nombre:nombre,
      comer:function(){
        if(this.carnivoro===true)
           console.log("Es un carnivoro");
          else
            console.log("No es un carnivoro");}
    };
    return object;
  };

var jirafa=new Animal("jirafita",4,false,true,5);
console.log(jirafa);
//jirafa.color_pelo="amarrillo";






// var jirafa2=new Animal("jirafita2",0,false,false,0);
// console.log(jirafa2);
// var araña=new Animal("perro");
// console.log(araña);














//{
  // comer=function(){
  //   if(this.carnivoro===true)
  //     console.log("Es un carnivoro");
  //   else
  //     console.log("No es un carnivoro");
  // }
//}

//Animal();

//var Pokemon=Object.create(Animal);

/*
Pokemon.tipo="tipo de pokemon",
Pokemon.poder="poder de pokemon",
Pokemon.energia=10,
Pokemon.atacar=function(){
    var result=this.energia/this.fuerza;
    if(result>1)
      console.log("Ganó");
    else
      console.log("Perdió");
  }

var CrearPrototipo=
*/
