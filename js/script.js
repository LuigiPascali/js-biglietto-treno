// Variabili js

// let age = prompt("Qual'è la tua età?");
// let km = prompt("Quanti chilometri vuoi percorrere sulla nostra fantastica monorotaia?");
// let kmPrice = 0.21;
// let totalPrice = (km * kmPrice);

// let discountedPrice;
//     if (age < 18) {
//         discountedPrice = totalPrice - (totalPrice * 0.2);
//     } else if (age > 65) {
//         discountedPrice = totalPrice - (totalPrice * 0.4);
//     } else {
//         discountedPrice = totalPrice;
//     }

// alert("Il prezzo del tuo biglietto è" + discountedPrice.toFixed(2) + " €");


// let calculateButton = document.getElementById("calculate_button");

// calculateButton.addEventListener("click", function() {
//   let age = prompt("Qual'è la tua età?");
//   let km = prompt("Quanti chilometri vuoi percorrere sulla nostra fantastica monorotaia?");
//   let kmPrice = 0.21;
//   let totalPrice = (km * kmPrice);


//   if (isNaN(age) || isNaN(km) || (age < 0 || age > 130) || (km < 0 || km > 200)) {
//     alert("Inserisci un valore numerico compreso tra 0 e 130 per l'età e tra 0 e 200 per i km");
//   } else if (age < 18) {
//     discountedPrice = totalPrice - (totalPrice * 0.2);
//   } else if (age > 65) {
//     discountedPrice = totalPrice - (totalPrice * 0.4);
//   } else {
//     discountedPrice = totalPrice;
//   }

//   let output = document.getElementById('txt');
//   output.innerHTML = discountedPrice.toFixed(2) + " €";
// });

let cities = {
  springfield: {km: 10},
  shelbyville: {km: 50},
  san_andreas: {km: 100},
  sin_city: {km: 110},
  quahog: {km: 150},
  marte: {km: 54600000}
};

function calculatePrice() {
  let city = document.getElementById("city").value;
  let age = document.getElementById("age").value;
  let km = 0;
  let kmPrice = 0.21;
  let totalPrice = 0;

  if (city!== "") {
    let cityData = cities[city];
    km = cityData.km;
    totalPrice = km * kmPrice;
  }

  let discountedPrice = totalPrice;
  let invalidInput = false;

  if (isNaN(age) || (age < 0 || age > 130)) {
    if (!invalidInput) {
      alert("Inserisci un valore numerico compreso tra 0 e 130 per l'età");
      invalidInput = true;
    }
  } else if (age < 18) {
    discountedPrice = totalPrice - (totalPrice * 0.2);
  } else if (age > 65) {
    discountedPrice = totalPrice - (totalPrice * 0.4);
  }

  let output = document.getElementById('txt');
  output.innerHTML = discountedPrice.toFixed(2) + " €";
}

document.getElementById("city").addEventListener("change", calculatePrice);
document.getElementById("age").addEventListener("input", calculatePrice);