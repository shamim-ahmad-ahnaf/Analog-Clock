
function startOurClock() {

    let d = new Date();
    let sec = d.getSeconds() / 60;
    let min = (sec + d.getMinutes()) / 60;
    let hr = (min + d.getHours()) / 12;

    let secElem = document.querySelector('.sec');
    let minElem = document.querySelector('.min');
    let hrElem = document.querySelector('.hr');


    secElem.style.transform = `rotate(${sec * 360}deg)`;
    minElem.style.transform = `rotate(${min * 360}deg)`;
    hrElem.style.transform = `rotate(${hr * 360}deg)`;
    
}

startOurClock();
setInterval(startOurClock, 1000);







