const min = 0;
const max = 100;
const num = Math.round(Math.random() * (max - min) + min);
let running = true;
let guess;
while(running){
    guess = window.prompt("Digite o número:");
    if (guess == num) {
        window.alert("Parabéns!! Você acertou!");
        running = false;
    }
    else if (guess < num) {
        window.alert("Calma... o número é maior");
    }
    else {
        window.alert("O número é menor que esse!");
    }

}
