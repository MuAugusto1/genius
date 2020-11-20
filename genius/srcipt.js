let order = [];
let clickedOrder = [];
let score = -1;

//0 VERDE
//1 VERMELHO
//2 AMARELO
//3 AZUL

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        
        setTimeout(() => {
            lightColor(elementColor, Number(i) + 1)
        }, 600 * Number(i) + 1);
        
    }
}

let lightColor = (element, number) => {
    number = number * 100;
    setTimeout(() => {
        element.classList.add('selected');
    }, 200 + number);
    setTimeout(() => {
        element.classList.remove('selected');
    }, 400 + number);
}

let check = () => {
    for(let i in clickedOrder)
    {
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        score++;
        alert("Pontuação: " + score);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        check();
    },250);
}

let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

let nextLevel = () =>{
    setTimeout(() => {
    shuffleOrder();
    },150);
}

let lose = () => {
    alert(`Pontuação ${score}!\nVocê perdeu o jogo!\nClique em Ok para iniciar novamente!`);
    order=[];
    clickedOrder=[];
    
    playGame();
}

let playGame = () => {
    alert("Iniciando novo jogo!");
    score = 0;

    nextLevel();
}

green.onclick = () => click(0); 
red.onclick = () => click(1); 
yellow.onclick = () => click(2); 
blue.onclick = () => click(3); 

playGame();