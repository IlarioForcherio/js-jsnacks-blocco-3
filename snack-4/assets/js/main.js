//*Snack4 (Bonus)*
//Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.



let arrayFirst = [1,2,3,4,5,];

let arraySecond = [];

let number = 0;



let differenzaArray = arrayFirst.length - arraySecond.length;

for ( i = 0; i < differenzaArray ; i++ ){
   
    number = Math.floor(Math.random() * 10);
    arraySecond.push(number);
    
}

console.log(arraySecond);


//let arrayNewNumbers = arraySecond.push(5,4,3,2,1);
//console.log(arraySecond);


