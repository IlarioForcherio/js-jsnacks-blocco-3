//*Snack4 (Bonus)*
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
//Interrompi il ciclo appena il nome è stato trovato.



const partyName = ["luca","marco","lucia"];
let nomeUtente = parseInt(prompt("inserisci il tuo nome"));

let soldat = true;

for (let i = 0 ; i < partyName.length ; i++){
      if (nomeUtente == partyName[i] ){
        soldat = true;
        

      }else{
        soldat = false;
        
    }

    if (soldat == true ){
        console.log("presente")
    }else{
        console.log("non-presente") 
    }
}


   

