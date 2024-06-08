const checkbox = document.getElementById("checkbox");
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const r4 = document.getElementById("r4");
const resultado1 = document.getElementById("resultado");
const resultado2 = document.getElementById("resultado2");
const botao = document.getElementById("botao");

botao.onclick = function() {
    console.log('clicou');
    if (checkbox.checked) {
        if(r1.checked){
            resultado1.textContent = 'Eita amigo da steam';
        }
        else if(r2.checked) {
            resultado1.textContent = 'Eita amigo do xbox';
        }  
        else if(r3.checked) {
            resultado1.textContent = 'Eita amigo da playstation';
        }
        else if(r4.checked) {
            resultado1.textContent = 'Eita amigo da nintendo';
        }
        else{
            resultado1.textContent = 'No games?';
        }
    }
    else {
        resultado1.textContent = 'Se inscreve primeiro!';
    }    
    }
    
