/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
let arr = []
   // Recorrer el objeto creando un arreglo por cada propiedad ingresada del objeto
for (let clave in objeto){
   let subArr = [clave, objeto[clave]]
   arr.push(subArr)
}
return arr;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto ={}
 
   for (let i = 0; i < string.length; i++ ){

     let letra = string.at(i);

     if (Object.keys(objeto).includes(letra)) {
//Object.keys retorna un arreglo con lo keys del objeto, por lo que se puedeutilizar el método includes para la condicional
        objeto[letra]+= 1; 
   } else objeto[letra] = 1;

   }

//recorre el string, creando un objeto con cada letra del string como key y el numero de veces que aparece en el string como value 

let claves = Object.keys(objeto);
//crea un arreglo con los keys del objeto

claves.sort();
//métdodo para ordenar arreglos alfabeticamente o por valor ascendente

let objetoOrdenado = {}
//el nuevo objet debe llenarse de acuerdo al orden del arreglo claves
//para eso vamos a recorrer arreglo claves y guardar par clave: valor del objeto en nuestro nuevoObjeto
for (let i = 0; i < claves.length; i++ ){
  console.log(objetoOrdenado[claves[i]] = objeto[claves[i]])
objetoOrdenado[claves[i]] = objeto[claves[i]]
//crea el key asignando su value, valor que en este caso corresponde al value asociado al key del primer objeto

}

return objetoOrdenado;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   //recorrrer el string
   //determinar mayuscuas vs minusculas
   //Unir el nuevo array uniendo concatenando mayus + minus


let mayus = '';
let minus = '';

for (let i = 0; i < string.length; i++){

   if(string[i] === string[i].toUpperCase()){
      mayus += string[i] 
   } else minus += string[i];

}

return (mayus + minus);

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   //Recorrer string y determinar las palabras por los espacios
   //mientras haya letras devolver la palabra en mirror
   //si encontramos espacios concatenar la nuev palabra con la palabra anterior mas un espacio
   let palabras = frase.split(' ');
   let resultado = [];

   for (let i = 0; i < palabras.length; i++) {

      let letras = palabras[i].split('')

      let letrasInvertidas = letras.reverse();

      let palabrasInvertidas = letrasInvertidas.join('')

   
     resultado.push(palabrasInvertidas);
   }
 
 return resultado.join(' ');

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   let string = numero.toString()
   let arr = string.split('')
   let reverseString = arr.reverse().join('')

   if(string === reverseString){

      return "Es capicua";

   } else return "No es capicua";


}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arr = string.split('')
   let newArr = [];
   for (let i=0; i < arr.length; i++){ 
      if (arr[i]=='a' || arr[i]=='b' || arr[i]=='c'){

      } else newArr.push(arr[i])
   
   }  return newArr.join('')

// let newString = string.replace(/[abc]/g, '')
// return newString;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
   arrReordenado = arrayOfStrings.sort((a, b) => a.length - b.length)

   return arrReordenado;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   //recorrer los arreglos uno en funcion del otro

   arrComun = [];

   for (let i = 0; i < array1.length; i++){
      for(let j = 0; j < array2.length; j++){
         if(array1[i] === array2[j]){
            arrComun.push(array1[i]);
         }
      }
   }
   return arrComun;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
