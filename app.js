// Selecting color inputs
const colorEls = document.querySelectorAll("input[type=color]");

// Selecting the paragraph that will display the code for the gradient
const p = document.querySelector(".rule-set");

// Syncing initial Colors[from HTML's value attribute] with the body of the document
setGradient();

// Setting the code for the gradient
setText();

// Attaching event listeners to color inputs to change color and update code in accordance with the input
for (const colorEl of colorEls) {
    colorEl.addEventListener("input", () => {
        setGradient();
        setText();
    });
}

function setGradient() {
    document.body.style.backgroundImage = `linear-gradient(to right, ${colorEls[0].value}, ${colorEls[1].value})`;
}

function setText() {
    p.textContent = document.body.style.backgroundImage + ";";
}
