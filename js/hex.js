let hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

let color = document.querySelector(".color");
let btn = document.getElementById("btn");


function getHex(){
    let hexNum = "#"
    for (let i = 0; i < 6; i++) {
        let index = randomHex();
        hexNum = hexNum + hex[index]
    }
    return hexNum;

}

// a function for rendom Selection
function randomHex() {
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', function () {
    document.body.style.backgroundColor = getHex();
    color.innerText = getHex();
})