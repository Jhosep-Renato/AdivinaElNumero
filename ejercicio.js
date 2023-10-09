const res = document.getElementById('res');
const intentos = document.getElementById('intentos');
let random = Math.round(Math.random() * 100);
let i = 0; 
function comprobar() {
    
    i++;
    const valor = document.querySelector('input');

    if(valor.value > random) {
        res.innerHTML = 'BAJA NÚMERO';
    } else if(valor.value < random) {
        res.innerHTML = 'SUBE NÚMERO';
    } else {
        res.innerHTML = 'ADIVINASTE';
        res.style.color = 'green';
        intentos.textContent +=  i;
        intentos.style.display = 'block';
    }

}