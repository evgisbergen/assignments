mybutton.addEventListener('click', changeText);

function changeText() {
    mybutton.textContent = "button clicked"

};
/*
document.getElementById('mybutton2')
mybotton2.addEventListener('click', changeColor);
function changeColor() {
    mybutton2.changeColor = "blue-background red-background"
};
*/

const redBackground = document.querySelector(".red-background");
const redBackground '()' => {
    mybutton2.classList.remove("blue-background");
    mybutton2.classList.add("red-background");
};

const toggleBackgroundMyButton2 = () => {
    mybutton2.classList.toggle("red-background");

    redBackground.addEventListener("click", toggleBackgroundMyButton2);
};