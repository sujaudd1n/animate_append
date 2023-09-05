import { animateNode } from "./src/animateNode.js";

const div = document.querySelector(".lang");

const btns = document.querySelectorAll("button");
const container = document.querySelector(".container");

btns.forEach((e) => {
    e.addEventListener("click", () => {
        container.textContent = "";
        if (e.classList.contains("charbtn")) animateNode.char(container, div);
        if (e.classList.contains("textbtn")) animateNode.text(container, div);
    });
});
