// // import { decode } from "iconv-lite";


const cipher = {
  encode: (offset, string) => {


    let resultado = "";
    let box = "";
    if (offset == null || offset == 0 || offset == [] || string == null || string == 0 || string == []) {
      throw new TypeError('Error, Error'); //para ver si encuentro un error.
    }
    for (let i = 0; i < string.length; i++) {
      //Fórmula letras 
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        box = ((string.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65;
      } //mientras que i en charCodeAt  sea >= 65 y i charcodeat sea <=90 le dire a boz 

      //Espacio número 32 del Código ASCII
      else if (string.charCodeAt(i) === 32) {
        box = 32;
      }


      resultado += String.fromCharCode(box);
    }

    return resultado;

  },

  decode: (offset, string) => {


    let resultado = "";
    let box = "";
    if (offset == null || offset == 0 || offset == [] || string == null || string == 0 || string == []) {
      throw new TypeError('Error, Error'); //para ver si encuentro un error.
    }
    for (let i = 0; i < string.length; i++) {
      //Fórmula letras 
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        box = ((string.charCodeAt(i) + 65 - parseInt(offset)) % 26) + 65;
      }

      //Espacio número 32 del Código ASCII
      else if (string.charCodeAt(i) === 32) {
        box = 32;
      }


      resultado += String.fromCharCode(box);
    }

    return resultado;

  },
}




export default cipher;

