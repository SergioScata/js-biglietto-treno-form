//Richiediamo all'utente i dati di cui abbiamo bisogno

//riportiamo il messaggio sia nella console che in Html


function userdonedatacompletion(event) {
    event.preventDefault();

    let namesurname = document.getElementById("namesurname").value;
    let travellength = document.getElementById("travellength").value;
    let age = document.getElementById("age").value;

    travellength= parseFloat(travellength);
    age = parseInt(age);

    let ticketprice= (travellength * 0.21);
    let finalprice = ticketprice.toFixed(2);


    if (age>=65) {
        ticketprice= (ticketprice * 0.6);
     }
     else if (age<18) {
         ticketprice= (ticketprice * 0.8);
     }
     else {
         ticketprice= ticketprice;
     }



    }


console.log ("Il prezzo del tuo biglietto è:" + finalprice);