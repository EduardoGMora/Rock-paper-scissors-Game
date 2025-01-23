// scissors rock paper game
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.game-overlay')
    const playButton = document.querySelector('.play-button')
    const timer = document.querySelector('.timer')
    const timetext = document.querySelector('#time')
    const userScore = document.querySelector('#user_score')
    const pcScore = document.querySelector('#pc_score')

    // options
    const options = document.querySelector('.options')
    const rock = document.querySelector('.rock')
    const paper = document.querySelector('.paper')
    const scissors = document.querySelector('.scissors')

    let interval; // Variable para el intervalo del temporizador

    const startTimer = () => {
        let time = 10;
        timetext.textContent = time;
        timer.style.display = 'flex';
        timetext.style.color = ''; // Reinicia el color del temporizador

        interval = setInterval(() => {
            time--;
            timetext.textContent = time;

            if (time <= 3) {
                timetext.style.color = 'red';
            }

            if (time === 0) {
                clearInterval(interval);
                // Reset UI
                overlay.style.display = 'flex';
                options.style.display = 'none';
                timer.style.display = 'none';
            }
        }, 1000);
    };

    const playRound = (userChoice) => {
        // get pc choice
        const pcOptions = ['rock', 'paper', 'scissors']
        const pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)]

        console.log(`PC seleccionó ${pcChoice}`)
        
        // check winner
        if (userChoice === pcChoice) {
            console.log('Empate')
        } else if (userChoice === 'rock' && pcChoice === 'scissors' || 
                    userChoice === 'paper' && pcChoice === 'rock' || 
                    userChoice === 'scissors' && pcChoice === 'paper') {
            userScore.textContent = parseInt(userScore.textContent) + 1
            console.log('Ganaste')
        } else {
            pcScore.textContent = parseInt(pcScore.textContent) + 1
            console.log('Perdiste')
        }

        // Stop the game
        clearInterval(interval); // Detén el temporizador
        overlay.style.display = 'flex';
        options.style.display = 'none';
        timer.style.display = 'none';
        timetext.style.color = ''; // Reinicia el color del temporizador
    }

    rock.addEventListener('click', () => { playRound('rock') })
    paper.addEventListener('click', () => { playRound('paper') })
    scissors.addEventListener('click', () => { playRound('scissors') })

    //event listener for play
    playButton.addEventListener('click', () => {
        overlay.style.display = 'none'
        options.style.display = 'flex'
        timer.style.display = 'flex'
        startTimer()
    })
})