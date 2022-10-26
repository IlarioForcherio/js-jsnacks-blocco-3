//*Snack2*
//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.


//chiedere all'utente di inserire un numero
//farne un ciclo e terminarlo al 5 giro
//somma i numeri ottenuti

let numeroUtente = 0;


let sum = 0;

let i = 0;
while (i < 5){
    numeroUtente = parseInt(prompt("inserisci un numero"));
    
    sum = sum + numeroUtente;
   i++
}
console.log(sum);

  