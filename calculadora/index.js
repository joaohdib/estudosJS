const display = document.getElementById("display");
let result;

function adiciona(valor) {
    if (display.textContent == '0') {
        display.textContent = valor;
    }
    else if (display.textContent.length < 11){
        display.textContent += valor;
    }
}

function clearDisplay() {
    display.textContent = "0";
}

function calculateVal() {
    try {
        result = eval(display.textContent);
        display.textContent = result;
    }

    catch(error) {
        display.textContent = 'Error';
    }
}