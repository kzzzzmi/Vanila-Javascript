const h2 = document.querySelector(".cool");

h2.addEventListener("mouseenter", handlerMouseenter);
h2.addEventListener("mouseleave", handlerMouseleave);

window.addEventListener("resize", handlerResize);
window.addEventListener("contextmenu", handlerContextmenu);

function handlerMouseenter() {
    h2.innerText = "The mouse is here!";
    h2.style.color = "tomato";
}

function handlerMouseleave() {
    h2.innerText = "The mouse is leave";
    h2.style.color = "blue";
}

function handlerResize() {
    h2.innerText = "you just resized!";
    h2.style.color = "orange";
}

function handlerContextmenu() {
    h2.innerText = "That was a right click!";
    h2.style.color = "green";
}
