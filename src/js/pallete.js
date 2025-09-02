const pallete = document.querySelector(".pallete__box")
const palleteButton = document.querySelector(".pallete__button-open")

let isClosed = false;

palleteButton.addEventListener("click", () => {
    if (isClosed === false) {
        pallete.style.opacity = "0";
        isClosed = true;
        console.log("close");
    } else if (isClosed === true) {
        pallete.style.opacity = "1";
        isClosed = false;
        console.log("open");
    }
});