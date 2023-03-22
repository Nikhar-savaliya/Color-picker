let colors = ["red","white","black","green", "blue", "pink", "yellow", "orange", "purple", "grey"]

let color = document.querySelector(".color");
let btn = document.getElementById("btn");

// a function for rendom Selection
function randomColor() {
    return Math.floor(Math.random() * colors.length);
}
// assign color to 1) backgroud,  2) display color
btn.addEventListener('click' ,function () {
    let index = randomColor();
    document.body.style.backgroundColor = colors[index];
    color.innerText = colors[index]
})