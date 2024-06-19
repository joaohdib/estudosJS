function atualizarHora() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    hora.textContent = `${hours}:${minutes}:${seconds}`;
    
}

const hora = document.getElementById("hora");
hora.textContent = 'oi';


setInterval(atualizarHora, 1000);