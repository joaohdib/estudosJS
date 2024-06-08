const botao = document.getElementById("rolar");
const label = document.getElementById("num");
const min = 1;
const max = 6;
let num;


botao.onclick = function() {
    num = Math.random() * (max - min) + min;
    console.log(num);
    label.textContent = Math.round(num);
}

