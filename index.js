function atualizarHora() {
    let date = new Date();
    let seconds = date.getSeconds().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');;
    let hours = date.getHours().toString().padStart(2, '0');;
    hora.textContent = `${hours}:${minutes}:${seconds}`;
}

const hora = document.getElementById("hora");
hora.textContent = 'oi';


setInterval(atualizarHora, 1000);