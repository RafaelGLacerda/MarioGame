const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const resetButton = document.getElementById('reset-button'); 

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => { 
        mario.classList.remove('jump');
    }, 500);
}


function resetGame() {
    
    resetButton.style.display = 'none';
    
    
    pipe.style.animation = 'pipe-animation 1s infinite linear';
    pipe.style.left = ''; 

    mario.style.animation = '';
    mario.src = './images/mario.gif'; 
    mario.style.width = '120px';
    mario.style.marginLeft = '0'; 
    
    startGameLoop();
}


let gameLoop;

function startGameLoop() {
    gameLoop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 90) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.left = `${marioPosition}px`;

            mario.src = './images/game-over.png';
            mario.style.width = '60px';
            mario.style.marginLeft = '30px';

            clearInterval(gameLoop);

            
            resetButton.style.display = 'block';
        }
    }, 10);
}

startGameLoop(); 


resetButton.addEventListener('click', resetGame);
document.addEventListener('keydown', jump);
