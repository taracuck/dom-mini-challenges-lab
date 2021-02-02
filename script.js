"use strict";

let total = 0;
let totalParagraph = document.querySelector(".total");
let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");

cola.addEventListener("click", () => {
  total += 2.0;
  totalParagraph.textContent = `Total: $${total}.00`;
});

peanuts.addEventListener("click", () => {
  total += 3.0;
  totalParagraph.textContent = `Total: $${total}.00`;
});

chocolate.addEventListener("click", () => {
  total += 4.0;
  totalParagraph.textContent = `Total: $${total}.00`;
});

gummies.addEventListener("click", () => {
  total += 6.0;
  totalParagraph.textContent = `Total: $${total}.00`;
});

// money
let coinsContainer = document.querySelector(".coin-images");

const printCoins = (howManyCoins, typeOfCoin) => {
  for (let i = 0; i < howManyCoins; i++) {
    let coin = document.createElement("div");
    coin.classList.add(typeOfCoin, "coin");
    coin.textContent = typeOfCoin;
    coinsContainer.append(coin);
    coin.addEventListener("click", () => {
      coin.remove();
    });
  }
};

let totalPrice = 0;
let totalCoinParagraph = document.querySelector(".total-money");
const editTotal = (typeOfCoin, howManyCoins) => {
  if (typeOfCoin === "penny") {
    totalPrice += 0.01 * howManyCoins;
  } else if (typeOfCoin === "nickel") {
    totalPrice += 0.05 * howManyCoins;
  } else if (typeOfCoin === "dime") {
    totalPrice += 0.1 * howManyCoins;
  } else {
    totalPrice += 0.25 * howManyCoins;
  }
  totalCoinParagraph.innerText = `Total: $${totalPrice}`;
};

let moneyForm = document.querySelector(".money-form");
moneyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(moneyForm);
  let typeOfCoin = formData.get("which-coin");
  let howManyCoins = formData.get("how-many");
  printCoins(howManyCoins, typeOfCoin);
  editTotal(typeOfCoin, howManyCoins);
});

// light bulb
let buttons = document.querySelectorAll(".button");
let lightBulb = document.querySelector(".light-bulb");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

onButton.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "yellow";
});
offButton.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "gray";
});
toggleButton.addEventListener("click", () => {
  if (lightBulb.style.backgroundColor === "gray") {
    lightBulb.style.backgroundColor = "yellow";
  } else if (lightBulb.style.backgroundColor === "yellow") {
    lightBulb.style.backgroundColor = "gray";
  }
});
endButton.addEventListener("click", () => {
  lightBulb.remove();
  buttons.forEach((button) => {
    button.disabled = true;
    button.classList.remove("button");
  });
});
