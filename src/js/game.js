// імпорти
import { alert, defaultModules, info, success, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

defaultModules.set(PNotifyMobile, {});


// pnotify

function errorPnotify() {
    return error({
        title: "Oh no!",
        text: "You are out of time."
    });
}


// Cooldown текст
const cooldownText = document.querySelector(".cooldown__title");

const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Піксель налаштування
const pixelSize = 25; // Тут розмір пікселів
const currentColor = '#ff0000';

// Час
const cooldown = 1;
let timeLeft = 120;
const maxTime = 120;

// Фон
ctx.fillStyle = '#a0d0ff';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const pixels = [];

// Система малювання
canvas.addEventListener('click', (evt) => {
    // Перевірка чи є ще секунди
    if (timeLeft >= cooldown) {
        timeLeft -= cooldown
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((evt.clientX - rect.left) / pixelSize);
        const y = Math.floor((evt.clientY - rect.top) / pixelSize);

        pixels.push({ x, y, color: currentColor });

        ctx.fillStyle = currentColor;
        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);

        //Якщо ні то виводити У вас немає часу і всьо
    } else if (timeLeft < cooldown) {
        errorPnotify();
        return;
    }
});

//Регенерація часу

setInterval(() => {
    if (timeLeft < maxTime) {
        timeLeft += 1;
        if (timeLeft > maxTime) timeLeft = maxTime;
    }
}, 1000);

// Вивід часу на cooldownText
setInterval(() => {
    cooldownText.textContent = `${timeLeft} sec.`
}, 300)
