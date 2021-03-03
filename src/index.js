import cipher from './cipher.js';

// pasar de una caja a otra

let boton1 = document.getElementById ("btnCifrar"); //guardando el elemento boton
boton1.addEventListener ("click", pagSig);       //usando el elemento boton
let boton2 = document.getElementById ("btnDescrifrar");
boton2.addEventListener ("click", pagSig);

//BACK PAGE

let reset1 = document.getElementById ("reset"); 
reset1.addEventListener ("click" , reset); //llamar la función
function reset (){ //función anónima
    document.getElementById ("box1").style.display = "block"; //se ve
    document.getElementById ("pagSig").style.display = "none"; // no se ve

}
//mostrar pag siguiente 

 function pagSig() {
     document.querySelector('.title').style.display = "none"; //no se ve
     document.querySelector('.nextPage').style.display = "block"; //se ve
    
}    

//boton cifrar con desplazamiento

   document.getElementById("btnCifrar").addEventListener("click", () => {
   let string = (document.getElementById("caja1").value).toUpperCase(); //guardar en la variable texto lo que se escriba en la caja 1
//    console.log (string);
   let offset = parseInt(document.getElementById("offSetCorazon").value); //guardando el offset
//    console.log (offset);

   let connect = cipher.encode(offset,string); //conectar cipher.js con index.js
   cipher.encode(offset,string);
   document.getElementById("resultado").innerHTML = connect;
   });

//boton descifrar con desplazamiento

   document.getElementById("btnDescrifrar").addEventListener("click", () => {
    let string = (document.getElementById("caja1").value).toUpperCase(); //string es donde voy a poner el mensaje que en id es caja 1
    let offset = parseInt(document.getElementById("offSetCorazon").value); 
    // console.log (offset);
    
    let connect = cipher.decode(offset,string); //conectar cipher.js con index.js
    cipher.decode(offset,string);
   document.getElementById("resultado").innerHTML = connect;
   
   });


//    console.log(cipher);
