let img = document.getElementById('img')  
let botoes = document.getElementById('botoes')
let sclique = new Audio('audio/click.mp3')
let colorIndex = 0;
let intervalId = null;


let trafficLight = ( event ) => {
    sclique.play()
    stopAuto();
    turnOn[event.target.id] ();

  
}

let stopAuto = () => {
    clearInterval(intervalId)
}

let nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

let mudarcor = () => {
    let colors = ['vermelho', 'amarelo', 'verde']
    let color = colors [colorIndex]
    turnOn[color]();
    nextIndex();
}


let turnOn = {

    'vermelho': () => img.src = 'img/vermelho.png',
    'amarelo': () => img.src = 'img/amarelo.png',
    'verde': () => img.src = 'img/verde.png',
    'automatico': () => intervalId = setInterval (mudarcor, 1000)

}

botoes.addEventListener('click', trafficLight);