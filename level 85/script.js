setInterval(function () {
    let now = new Date();
    let target = new Date("Jan 1, 2026 00:00:00");

    let time = target - now;

    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor(time / (1000 * 60 * 60)) % 24;
    let minutes = Math.floor(time / (1000 * 60)) % 60;
    let seconds = Math.floor(time / 1000) % 60;

    sec.textContent = seconds;
    min.textContent = minutes;
    hr.textContent  = hours;
    day.textContent = days;

}, 1000);
