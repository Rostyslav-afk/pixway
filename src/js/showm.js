const showmButton = document.querySelector(".showm__button");

let isMenuOpened = false;

showmButton.addEventListener("click", (event) => {
    if (isMenuOpened === false) {
        isMenuOpened = true
        event.target.textContent = "⬆";
    } else if (isMenuOpened === true) {
        isMenuOpened = false
        event.target.textContent = "⬇";
    }
});