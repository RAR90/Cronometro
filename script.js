/*Declaramos uma função para cada botão. 

Começamos a trabalhar na função "start()". Ela irá chamar
uma outra função, chamada "counter()" a cada 1 segundo através do setInterval. 

a counter() lidará com a variavel "sec" que guarda o valor 00. 
E como counter é chamada através de um setInterval a cada 1 segundo,
sempre que ela for chamada irá atribuir um indice a variavel "sec"*/



let sec = 0;
let min = 0;
let horas = 0;
let intervalo;


function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}
function start() {

    intervalo = setInterval(counter, 1000)
};

function pause() {
    clearInterval(intervalo)
};

function reset() {

    clearInterval(intervalo)
    document.getElementById('cont').innerHTML = "00:00:00"
    
    sec = 0;
    min = 0;
    horas = 0;
};

function counter() {
    sec++
    if (sec == 60) {
        min++
        sec = 0
        if (min == 60) {
            min = 0
            hora++
        }
    };


    document.getElementById("cont").innerHTML = twoDigits(horas) + ":" + twoDigits(min) + ':' + twoDigits(sec);
}


document.querySelector('.pause').addEventListener('click', clicou);

