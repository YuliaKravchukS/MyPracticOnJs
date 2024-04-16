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
const arrAddSign = ["MRC", "M-", "M+", "→", "CE", "AC"];

calculate.addEventListener("click", onCalculateClick);

function onCalculateClick(e) {
  if (e.target.nodeName !== "BUTTON") return;
  const key = e.target.textContent;

  if (key === "%") {
    const percent = (parseFloat(a) * parseFloat(b)) / 100;
    input.value = percent;
    b = percent.toString();
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
        c = parseFloat(a) / parseFloat(b);
        break;
      case "*":
        c = parseFloat(a) * parseFloat(b);
        break;
      case "-":
        c = parseFloat(a) - parseFloat(b);
        break;
      case "+":
        c = parseFloat(a) + parseFloat(b);
        break;
      case "√":
        c = Math.sqrt(parseFloat(a));
        break;
    }
    a = c;
    finish = true;
    input.value = c;
  }
  if (arrAddSign.includes(key)) {
    switch (key) {
      case "MRC":
        if (memory !== "") {
          input.value = memory;
          memory = "";
        }
        break;
      case "M-":
        if (memory !== "") {
          memory -= c;
        } else {
          memory = c;
        }
        a = "";
        b = "";
        d = "";
        sign = "";
        console.log("M-", c, a, b);
        break;
      case "M+":
        if (memory !== "") {
          memory += c;
        } else {
          memory = c;
        }
        a = "";
        b = "";
        d = "";
        sign = "";
        break;
      case "→":
        input.value = input.value.slice(0, -1);
        break;
      case "CE":
      case "AC":
        finish = false;
        input.value = startValue;
        a = "";
        b = "";
        c = "";
        d = "";
        sign = "";
        break;
    }
  }
}
