/* 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// recupero il bottone dall html
const playButtonEl = document.getElementById("play-button");

// creo evento alla pressione del bottone
playButtonEl.addEventListener("click", function() {
    const containerEl = document.getElementById("container");
    
    // creo ciclo for che mi crea 100 elementi
    for(let i = 0; i < 100; i++){
        // creo elemeno div
        let newSquareEl = document.createElement("div");
        // assegno classe creata in css
        newSquareEl.classList.add("square");
        // appendo al genitore
        containerEl.append(newSquareEl)
    }
})