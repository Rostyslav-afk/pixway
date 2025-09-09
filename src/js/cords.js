const cordsText = document.querySelector(".cords__text");

cordsText.addEventListener("click", (event) => {
    const text = event.target.textContent;
    navigator.clipboard.writeText(text).then(() => {});
});