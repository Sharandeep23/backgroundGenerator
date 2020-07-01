// Initial Colors
const initialColor1 = "#8edfff";
const initialColor2 = "#ff0000";

// Selecting color inputs
const colorEl1 = document.querySelector("#color1");
const colorEl2 = document.querySelector("#color2");

// Syncing initial Colors with the color inputs
document.body.style.backgroundImage = initialGradient();
colorEl1.value = initialColor1;
colorEl2.value = initialColor2;

// Creating and appending a new paragraph element to display information about the background
const p = document.createElement("p");
p.textContent = initialGradient();
// Adding a class named rule-set
p.className = "rule-set";
document.body.append(p);

// Attaching event listeners to color inputs to change color and update info in accordance with the input
colorEl1.addEventListener("input", changeColorAndUpdateText);

colorEl2.addEventListener("input", changeColorAndUpdateText);

function initialGradient() {
    return `linear-gradient(to right, ${initialColor1}, ${initialColor2})`;
}

function changeColorAndUpdateText() {
    document.body.style.backgroundImage = `linear-gradient(to right, ${colorEl1.value}, ${colorEl2.value})`;
    p.textContent = `linear-gradient(to right, ${colorEl1.value}, ${colorEl2.value});`;
}
