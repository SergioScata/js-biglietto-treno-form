//Richiediamo all'utente i dati di cui abbiamo bisogno

//riportiamo il messaggio sia nella console che in Html


function userdonedatacompletion(event) {
    event.preventDefault();

    let namesurname = document.getElementById("namesurname").value;
    let travellength = document.getElementById("travellength").value;
    let age = document.getElementById("age").value;

    travellength = parseFloat(travellength);
    

    let ticketprice= (travellength * 0.21);
    


    if (age =='over65') {
        ticketprice= (ticketprice * 0.6);
     }
     else if (age =='underage') {
         ticketprice= (ticketprice * 0.8);
     }
     else {
         ticketprice= ticketprice;
     }

     let finalprice = ticketprice.toFixed(2);

     console.log ("Il prezzo del tuo biglietto è:" + finalprice);

     document.getElementById("prezzobiglietto").innerHTML = finalprice;
     document.getElementById("nomecognome").innerHTML = namesurname;
     document.getElementById("mio-form").classList.add("d-none");
     document.getElementById("biglietto").classList.remove("d-none");
    }

    


