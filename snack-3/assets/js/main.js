


//*Snack3* (Bonus)
//Fai inserire un numero, che chiameremo N, all’utente.
//Genera N array
//ognuno formato da 10 numeri casuali da 1 a 100.
//Ogni volta che ne crei uno, stampalo.


//far inserire un numero dall'utente
//quel numero diventa il numero di array
//in ogni array pusho 10 volte un numero casuale



let N = parseInt(prompt("inserisci quanti array vuoi creare"));








let i = 0;

while (i < N){
    i++
    let array = [];
    
    let x = 0     

 while( x < 10 ){
    
    x++
    let numeroRandom = Math.floor(Math.random() * 100);
    array.push(numeroRandom);
    
}
console.log(array);

}










