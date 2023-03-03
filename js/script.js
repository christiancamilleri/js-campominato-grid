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
    
    // dico al programma di non creare altri schemi uno stto l ltro ogni volta che premo il bottone
    containerEl.innerHTML = ""
    
    // creo ciclo for che mi crea 100 elementi
    for(let i = 1; i < 101; i++){
        // creo elemeno div
        let newSquareEl = document.createElement("div");
        // assegno classe creata in css
        newSquareEl.classList.add("square");
        // appendo al genitore
        containerEl.append(newSquareEl)

        // aggiungo evento alla pressione di NewSquareEl
        newSquareEl.addEventListener("click", function() {
            newSquareEl.classList.toggle("blue");
            console.log(i);
        })
    }


})