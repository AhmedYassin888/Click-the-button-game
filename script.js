let score = 0;
let timeLeft = 10;
let timer;

function incrementCounter() {
    if (timeLeft > 0) {
        score++;
        document.getElementById('score').innerText = score;
    }
}

function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById('timeLeft').innerText = timeLeft;
    } else {
        clearInterval(timer);
        alert('Game Over! Your score is ' + score);
    }
}

window.onload = function() {
    timer = setInterval(countdown, 1000);
}