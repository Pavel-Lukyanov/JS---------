
let input = document.querySelector('input');
let p = document.querySelector('p');

let number = getRandomInt();
function getRandomInt() {
    return Math.floor(Math.random() * (100 - 0)) + 0;
}

input.addEventListener('blur', function () {
    
    if (input.value > number) {
        p.innerHTML = 'Введи число меньше';
        input.value = '';
    } else if (input.value < number) {
        p.innerHTML = 'Введи число больше';
        input.value = '';
    }
    if (input.value == number) {
        p.innerHTML = `Поздравляю, ты выиграл!<br>Число равно ${number} `;
    }
})

console.log(number)