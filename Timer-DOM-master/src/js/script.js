// Функция устанавливает таймер
// Функция для определения времени разницу
// Функция обновления таймера

let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let date = document.querySelector('.input');
let btn = document.querySelector('.btn');
let clearBtn = document.querySelector('.resetBtn');

let deadLine = '';
function addZero(num) {
    return num < 10 ? `0${num}` : num;
}

function timers () {
    let now = new Date();
    let different = Date.parse(deadLine) - now;
    days.textContent = addZero(Math.floor(different / 1000 / 60 / 60 / 24));
    hours.textContent = addZero(Math.floor(different / 1000 / 60 / 60) % 24);
    minutes.textContent = addZero(Math.floor(different / 1000 / 60) % 60);
    seconds.textContent = addZero(Math.floor(different / 1000) % 60);
}
btn.addEventListener('click', () => {
    if(date.value){
        deadLine = date.value;
        if(Date.parse(deadLine) - new Date() > 0){
            timers();
            let interval = setInterval(() => {
                timers();
                clearBtn.addEventListener('click', () =>{
                    clearInterval(interval);
                    date.value = '';
                    deadLine = '';
                    days.textContent = '00';
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                })
            },1000);
        }else{
            alert('Прошло')
        }

    }else {
        alert('Enter date')
    }

});


