

////*Snack1*
//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
//Continua a chiedere i numeri all’utente e a inserirli nell’array 
//fino a quando la somma degli elementi è minore di 50.

//crea un array vuoto
//chiedi all'utente con prompt e parseInt(per la restituzione dell'intero) di inserire un numero
// il numero inserito finisce dentro l'array
// cicla la richiesta di inserimento numero e il relativo push nell'array


let array = [];
let numeroUtente = 0;
let sum = 0;

//ciclo while per chiedere ripetutamente di inserire un numero

let i = 0;
while (sum <= 50){
     
     numeroUtente = parseInt(prompt("inserisci"));
     array.push(numeroUtente);
     sum = sum + numeroUtente;
     
     i++

}
console.log(array);










 






