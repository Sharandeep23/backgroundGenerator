// Selecting color inputs
const colorEls = document.querySelectorAll("input[type=color]");

// Syncing initial Colors with the the document
setGradient();

// Creating and appending a new paragraph element to display information about the background
const p = document.createElement("p");
// Adding a class named rule-set
p.className = "rule-set";
document.body.append(p);

// Setting default info about the gradient
setText();

// Attaching event listeners to color inputs to change color and update info in accordance with the input
for (const colorEl of colorEls) {
    colorEl.addEventListener("input", () => {
        setGradient();
        setText();
    });
}

function getGradient() {
    return `linear-gradient(to right, ${colorEls[0].value}, ${colorEls[1].value})`;
}

function setGradient() {
    document.body.style.backgroundImage = getGradient();
}

function setText() {
    p.textContent = getGradient() + ";";
}
