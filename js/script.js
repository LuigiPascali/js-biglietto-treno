// Variabili js

// let age = prompt("Qual'è la tua età?");
// let km = prompt("Quanti chilometri vuoi percorrere sulla nostra fantastica monorotaia?");
// let kmPrice = 0.21;
// let totalPrice = (km * kmPrice);

// let discountedPrice;
//     if (age > 18) {
//         discountedPrice = totalPrice - (totalPrice * 0.2);
//     } else if (age > 65) {
//         discountedPrice = totalPrice - (totalPrice * 0.4);
//     } else {
//         discountedPrice = totalPrice;
//     }

// alert("Il prezzo del tuo biglietto è" + discountedPrice.toFixed(2) + " €");


let calculateButton = document.getElementById("calculate_button");

calculateButton.addEventListener("click", function() {
  let age = prompt("Qual'è la tua età?");
  let km = prompt("Quanti chilometri vuoi percorrere sulla nostra fantastica monorotaia?");
  let kmPrice = 0.21;
  let totalPrice = (km * kmPrice);

  let discountedPrice;
  if (age > 18) {
    discountedPrice = totalPrice - (totalPrice * 0.2);
  } else if (age > 65) {
    discountedPrice = totalPrice - (totalPrice * 0.4);
  } else {
    discountedPrice = totalPrice;
  }

  let output = document.getElementById('txt');
  output.innerHTML = discountedPrice.toFixed(2) + "€";
});

