var anni = prompt('Inserisci la tua età');
var kilometri = prompt('Inserisci la distanza da percorrere');
var costoPerKm = 0.21;
var prezzoBiglietto = kilometri * costoPerKm;

if (anni < 18) {
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto / 100 * 20); // sconto il 20%
} else if (anni > 65) {
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto / 100 * 40); // sconto il 40%
}

console.log(prezzoBiglietto);
