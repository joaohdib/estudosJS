function escolher() {
    let num = Math.floor(Math.random() * 3);

    return escolhas[num];
}

function verificaVitoria(player, bot) {
    switch (player) {
        case 'papel':
            if (bot == 'tesoura') {
                return -1
            }
            else if (bot == 'papel') {
                return 0;
            }
            else {
                return 1;
            }
        case 'tesoura':
            if (bot == 'tesoura') {
                return 0
            }
            else if (bot == 'papel') {
                return 1;
            }
            else {
                return -1;
            }
        case 'pedra':
            if (bot == 'tesoura') {
                return 1
            }
            else if (bot == 'papel') {
                return -1;
            }
            else {
                return 0;
            }
    }

}

const botoes = document.getElementsByClassName('emoji-button')
const botoesArray = Array.from(botoes);
const botaoReiniciar = document.getElementsByClassName('reset-button')[0];
const situacao = document.getElementById("situacao");
let pontuacao =  document.getElementById('user-score');
let pontuacaoPc = document.getElementById('computer-score');
let escolhaBot;
let resultado;
console.log(botoesArray);
let escolhas = ['papel', 'tesoura', 'pedra'];



botoesArray.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        situacao.style.visibility = "visible";
        escolhaBot = escolher();
        resultado = verificaVitoria(escolhas[index], escolhaBot);
        console.log(resultado)
        switch (resultado) {
            case 1:
                situacao.textContent = "Você venceu!"
                situacao.style.color = "green";
                pontuacao.textContent++;
                break;
            case 0:
                situacao.textContent = "Você empatou!"
                situacao.style.color = "black";
                break;
            case -1:
                situacao.textContent = "Você perdeu!"
                situacao.style.color = "red";
                pontuacaoPc.textContent++;
                break;
            default:
                situacao.textContent = "Erro!";
        }
    });
});

botaoReiniciar.addEventListener("click", () => {
    pontuacao.textContent = 0;
    pontuacaoPc.textContent = 0;
});

