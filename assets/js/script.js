/* 
## Palidroma ##

- Chiedere all’utente di inserire una parola;
- Creare una funzione per capire se la parola inserita è palindroma.

################################################################################################################

1. Creo una variabile dove chiedo all'utente di inserire una parola;

2. Creo una funzione dove controllare se la parola è palindroma o no;
   a. Controllo se il valore passato sia effettivamente una stringa;
   b. 

3. Stampo il risultato corrispondente
*/

// 1. 
const requestWord = prompt('Inserisci una parola');


palindroma(requestWord);

// 2. 
function palindroma (string) {
    if(isNaN(string)) {
console.log('CORRETTO: è una stringa');
    }else{
        console.log('ERRORE: Devi inserire una stringa');
    };
};