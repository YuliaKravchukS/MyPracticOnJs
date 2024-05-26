"use strict";
const input = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const calculate = document.querySelector(".calculate");

let startValue = 0;
let a = "";
let b = "";
let c = "";
let d = "";
let memory = "";
let sign = "";
let finish = false;
input.value = startValue;

function clearAll() {
  a = "";
  b = "";
  d = "";
  sign = "";
}

const arrNumbers = [
  "00",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
];
const arrSign = ["/", "*", "+", "-", "√", "%"];
const arrAddSign = ["MR", "M-", "M+", "→", "MC", "AC"];

input.addEventListener("input", () => {
  if (input.value.length > 12) {
    input.value = input.value.slice(0, 12);
    console.log(input.value.length);
    return input.value;
  }
});
calculate.addEventListener("click", onCalculateClick);

function onCalculateClick(e) {
  if (e.target.nodeName !== "BUTTON") return;
  const key = e.target.textContent;

  if (key === "%") {
    const percent = (a * b) / 100;
    input.value = percent;
    b = percent;
    return;
  }
  if (key === "√") {
    const sqrt = Math.sqrt(a);
    input.value = sqrt;
    a = sqrt;
    return;
  }

  if (arrNumbers.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      input.value = a;
    } else if (a !== "" && b !== "" && finish) {
      a = c;
      b = key;
      finish = false;
      input.value = b;
    } else {
      b += key;
      input.value = b;
    }
    return;
  }

  if (arrSign.includes(key)) {
    sign = key;
    input.value = sign;
    return;
  }

  if (key === "=") {
    switch (sign) {
      case "/":
        if (b === "0" || b === "00") {
          input.value = "Error";
          c = "";
          return;
        }
        c = a / b;
        break;
      case "*":
        c = a * b;
        break;
      case "-":
        c = a - b;
        break;
      case "+":
        c = a + b;
        break;
    }
    a = c;
    finish = true;
    input.value = c;
  }
  if (arrAddSign.includes(key)) {
    switch (key) {
      case "MR":
        if (memory !== "") {
          input.value = memory;
          a = memory;
          b = "";
        } else {
          input.value = 0;
        }
        break;
      case "M-":
        if (memory !== "") {
          memory -= c;
        } else {
          memory = c;
        }
        clearAll();
        break;
      case "M+":
        if (memory !== "") {
          memory += c;
        } else {
          memory = c;
        }
        clearAll();
        break;
      case "→":
        a = input.value.slice(0, -1);
        input.value = a;
        break;
      case "MC":
        memory = "";
      case "AC":
        finish = false;
        input.value = startValue;
        c = "";
        clearAll();
        memory = "";
        break;
    }
  }
}
