let startButton = document.querySelector('#start-button button');
let resetButton = document.querySelector('#reset-button button');


let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');


startButton.addEventListener('click', start);
resetButton.addEventListener('click' ,reset)
var cronometro;


function start(){

     cronometro = setInterval(() => {
        let sec = Number(seconds.textContent);
        let min = Number(minutes.textContent);
        let hour = Number(hours.textContent);
        seconds.textContent = formatNumber(sec + 1);
        if(sec === 59){
            seconds.textContent = '00';
            minutes.textContent = formatNumber(min + 1);}
        if((min === 59) && (sec===59)){
            seconds.textContent = '00'
            minutes.textContent = '00';
            hours.textContent = formatNumber(hour + 1);}
        if((min === 59) && (sec===59)&& (hour ===59)){
            clearInterval(cronometro)
        }
    
    }, 1000);
    startButton.setAttribute('disabled','')

}

function reset(){
    clearInterval(cronometro)
    seconds.textContent = '00';
    minutes.textContent = '00';
    hours.textContent = '00';
    startButton.removeAttribute('disabled')
}

function formatNumber(number){
    return number <=9? `0${number}`: number;
}
    