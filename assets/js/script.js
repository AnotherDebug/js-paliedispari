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

// Riferimenti
const palindromaRef = document.getElementById("palindroma");

//1.
const requestWord = prompt("Inserisci una parola");

palindroma(requestWord);

/**
 *
 * @param {string} string
 */
// 2.
function palindroma(string) {
  //2. a.
  if (isNaN(string)) {
    //2. b.
    const revRequestWord = requestWord.split("").reverse().join("");
    console.log(revRequestWord);
    //2. c.
    if (revRequestWord === requestWord) {
      palindromaRef.innerHTML = `Hai inserito la parola "${requestWord}", dal controllo effettuato, "${revRequestWord}" è palindroma!`;
      console.log("La parola è palindroma");
    } else {
      palindromaRef.innerHTML = `Hai inserito la parola "${requestWord}", dal controllo effettuato, "${revRequestWord}" non è palindroma!`;
      console.log("La parola non è palindroma");
    }
    console.log("CORRETTO: è una stringa");
  } else {
    console.log("ERRORE: Devi inserire una stringa");
  }
}

/* 
## Pari e Dispari ##

- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5;
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione);
- Sommiamo i due numeri;
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);
- Dichiariamo chi ha vinto;

################################################################################################################

1. Dichiaro una variabile dove chiedo all'utente se sceglie pari o dispari, ed un numero a caso compreso tra 1 e 5;
  a. Controllo se la prima variabile è una stringa;
  b. Controllo se la seconda variabile è un numero;
2. Creo una funzione per generare un numero randomico;
3. Dichiaro due variabili che contengono il valore numerico minimo e massimo per generare il numero randomico;
4. Dichiaro una variabile che salva il valore numerico della funzione "random" del PC;
5. Creo una funzione che somma i due numeri, dell'utente e del pc;
6. Dichiaro una variabile che raccoglie il risultato della funzione somma; 
7. Creo una funzione che stablisce se il numero è pari o dispari; 
8. Creo dei filtri per associare le stringhe pari dispari ai vari risultati;
9. In base al risultato si dichiara il vincitore.
*/

//Riferimenti
const pariDispariRef = document.getElementById("pariDispari");

//1.
const pariDispari = prompt("Scegli pari o dispari");
//1.b.
const numUtente = parseInt(prompt("Scegli un numero compreso tra 1 e 5"));
console.log(pariDispari);
console.log(numUtente);

//3.
const min = 1;
const max = 5;

//4.
const numPc = randomizer(min, max);
console.log(numPc);

//6.
const result = sum(numUtente, numPc);
console.log(result);

//1.a.
if (isNaN(pariDispari)) {
  //8.
  if (isPari(result) && pariDispari === "pari") {
    //9.
    pariDispariRef.innerHTML = `L'utente ha scelto ${pariDispari}. Il risultato è ${result}, Vince l'utente!`;
    console.log("Vince l'utente");
  } else if (!isPari(result) && pariDispari === "dispari") {
    //9.
    pariDispariRef.innerHTML = `L'utente ha scelto ${pariDispari}. Il risultato è ${result}, Vince l'utente!`;
    console.log("Vince l'utente");
  } else {
    //9.
    pariDispariRef.innerHTML = `L'utente ha scelto ${pariDispari}. Il risultato è ${result}, Vince il pc!`;
    console.log("vince il pc");
  }
} else {
  //1.a.
  pariDispariRef.innerHTML = 'INSERIRE "pari" o "dispari"';
  console.log('Inserire "pari" o "dispari"');
}

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
function sum(n1, n2) {
  const somma = n1 + n2;
  return somma;
}

//7.
/**
 *
 * @param {number} num
 * @returns
 */
function isPari(num) {
  if (num % 2) return false;

  return true;
}
