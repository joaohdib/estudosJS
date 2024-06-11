const start = document.getElementById("start");
const b1 = document.getElementById("bola1");
const b2 = document.getElementById("bola2");
const b3 = document.getElementById("bola3");
const pontuacao = document.getElementById("score");
const min = 1;
const maxX = 800;
const maxY = 600;
let score = 0;
let rodando;
let intervalo;

b1.onclick = function () {
    score++;
    pontuacao.textContent = score;
}
b2.onclick = function () {
    score++;
    pontuacao.textContent = score;
}
b3.onclick = function () {
    score++;
    pontuacao.textContent = score;
}

function mexeBolas() {
    b1.style.left = (Math.random() * (1000 - 50)).toString() + "px";
    b1.style.top = (Math.random() * (600 - 50)).toString() + "px";
    b2.style.left = (Math.random() * (1000 - 50)).toString() + "px";
    b2.style.top = (Math.random() * (600 - 50)).toString() + "px";
    b3.style.left = (Math.random() * (1000 - 50)).toString() + "px";
    b4.style.top = (Math.random() * (600 - 50)).toString() + "px";
    console.log(b1.style.top);
}

start.onclick = function () {
    pontuacao.style.display = 'block';
    b1.style.display = 'block';
    start.style.display = 'none';
    b2.style.display = 'block';
    b3.style.display = 'block';
    intervalo = setInterval(mexeBolas, 1000);

    console.log(score);
}

