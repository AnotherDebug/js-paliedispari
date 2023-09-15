/* 
## Palidroma ##

- Chiedere all’utente di inserire una parola;
- Creare una funzione per capire se la parola inserita è palindroma.

################################################################################################################

1. Creo una variabile dove chiedo all'utente di inserire una parola;

2. Creo una funzione dove controllare se la parola è palindroma o no;
   a. Controllo se il valore passato sia effettivamente una stringa;
   b. Dichiaro una seconda variabile dove salvo il valore della prima variabile per renderla un array, scompattarla, rigirarla, renderla di nuovo una stringa.
    Utilizzo quindi il metodo .split(), .reverse(), .join();
   c. Confronto attraverso un controllo se la prima variabile con la seconda per verificare effettivamente se la stringa corrisponde perfettamente al contrario;

3. Stampo il risultato corrispondente;
*/

/* 

*/

// 1.
// const requestWord = prompt("Inserisci una parola");

// palindroma(requestWord);

// /**
//  *
//  * @param {string} string
//  */
// // 2.
// function palindroma(string) {
//   //2. a.
//   if (isNaN(string)) {
//     //2. b.
//     const revRequestWord = requestWord.split("").reverse().join("");
//     console.log(revRequestWord);
//     //2. c.
//     if (revRequestWord === requestWord) {
//       console.log("La parola è palindroma");
//     } else {
//       console.log("La parola non è palindroma");
//     }
//     console.log("CORRETTO: è una stringa");
//   } else {
//     console.log("ERRORE: Devi inserire una stringa");
//   }
// }

/* 
## Pari e Dispari ##

- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5;
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione);
- Sommiamo i due numeri;
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);
- Dichiariamo chi ha vinto;

################################################################################################################

1. Dichiaro una variabile dove chiedo all'utente se sceglie pari o dispari;
2. Creo una funzione per generare un numero randomico;
3. Dichiaro due variabili che contengono il valore numerico minimo e massimo per generare il numero randomico;
4. Dichiaro due variabili, una per l'utente, una per il pc che salva il valore numerico della funzione "random";
5. Creo una funzione che somma i due numeri, dell'utente e del pc;
6. In base al risultato si dichiara il vincitore.
*/

//1.
const pariDispari = prompt("Scegli pari o dispari");
console.log(pariDispari);

//3.
const min = 1;
const max = 5;

//4.
let utente = randomizer(min, max);
console.log(utente);

let pc = randomizer(min, max);
console.log(pc);






//2.
/**
 *
 * @param {number} min
 * @param {number} max
 */
function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//5.
/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 * @returns 
 */
function sum(n1,n2) {
  const somma = n1 + n2;
  return sum;
};