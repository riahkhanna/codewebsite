let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();

    // Make it 2-digit
    hrs.innerHTML = h < 10 ? "0" + h : h;
    mins.innerHTML = m < 10 ? "0" + m : m;
    sec.innerHTML = s < 10 ? "0" + s : s;

}, 1000);