"use strict";

const btn = document.querySelector(".btn");
const inputText = document.querySelector(".inputText");

const container = document.querySelector("#container");

btn.addEventListener("click", onClickBtn);

function onClickBtn() {
  const inputValue = inputText.value;
  container.innerHTML = ''; 

  const arrString = inputValue.split("");
  let x = 0;
  let y = 0;

    arrString.forEach((leter,index) => {
        const span = document.createElement("span");
        span.textContent = leter;
        span.style.color = "red";
        span.style.fontSize = "20px";
        span.style.position = "absolute";
        span.style.left =`${x+index*10}px`;
        container.appendChild(span);

        span.addEventListener('mouseenter', () => {
            span.classList.add("hover");
            console.log(1);
        })
        span.addEventListener('mouseleave', () => {
            span.classList.remove("hover");
            console.log(13);
        })
        span.addEventListener("mousemove", onMousemove);
        const hoverElement = span
        function onMousemove(e) {
            if (e.target.nodeName==="SPAN") {
                x = e.x;
                y = e.y;
                hoverElement.style.left = x + "px";
                hoverElement.style.top = y + "px";
            }
        }
        
  });
}
