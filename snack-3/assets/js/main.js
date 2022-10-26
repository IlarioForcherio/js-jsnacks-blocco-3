
//Crea un array di numeri interi e fai la somma di tutti gli
// elementi  che sono in posizione (indice) dispari


let arrayNumeri = [3,1,3,1,3,1,3,1,3,1];

let numero = 0;

for (let i = 0 ; i < arrayNumeri.length ; i++){
    if (( i % 2 ) == 0){
        numero = numero + arrayNumeri[i];  
    }
    
}


console.log(numero);

