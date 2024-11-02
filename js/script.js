let eta= prompt("Qual è l'età del passeggero?");
let km= prompt("Quanti Kilometri è intenzionato a percorrere il passeggero?");
const prezzoAlKm= 0.21;

console.log(`${eta} Anni`);
console.log(`${km}Km`);
//Sconto Minori 20%
//Sconto Senior 65%
let prezzoTotale= km * prezzoAlKm;

if (eta>=65){
    prezzoTotale= prezzoTotale * 0.6;
} else if(eta<18){
    prezzoTotale= prezzoTotale * 0.8;
}

prezzoTotale= prezzoTotale.toFixed(2);

console.log(`Il prezzo totale per il viaggio è: ${prezzoTotale} Euro`);