let cont = 0;
document.getElementById("aumenta").onclick = function() {
    cont++;
    document.getElementById("contador").textContent = cont;
}

document.getElementById("diminui").onclick = function() {
    cont--;
    document.getElementById("contador").textContent = cont;
}