// Seleccionamos los elementos del DOM
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Fecha objetivo de la cuenta regresiva (ajústala a tu fecha deseada)
const targetDate = new Date('2025-03-14T00:00:00').getTime();

// Actualiza la cuenta regresiva cada segundo
const countdown = setInterval(() => {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    // Calculamos los días, horas, minutos y segundos restantes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Actualizamos los valores en el DOM
    daysElement.innerText = days < 10 ? '0' + days : days;
    hoursElement.innerText = hours < 10 ? '0' + hours : hours;
    minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
    secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;

    // Si la cuenta regresiva ha terminado, detenemos el intervalo
    if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = '<h2>¡La cuenta regresiva ha terminado!</h2>';
    }
}, 1000);
