const bodyEl = document.querySelector("body");
const score = document.getElementById('score');
let amount = 0;
let audio = new Audio('../audio/sound.wav');

bodyEl.addEventListener("click", (e) => {
    amount++;
    score.innerHTML = amount;
    audio.play();


    const xPosition = e.offsetX;
    const yposition = e.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPosition + "px";
    spanEl.style.top = yposition + "px";

    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + 'px';

    bodyEl.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});