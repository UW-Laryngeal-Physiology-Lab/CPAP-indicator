let colorDiv = document.getElementById('color')
let startButton = document.getElementById('start')
let finished = document.getElementById('finished-indicator')
let timer = document.getElementById('timer')

//Stopwatch

let sec = 0;
let stopTime = false

function cycle(){
    if(stopTime === false){
        console.log('Input time:', seconds, 'Actual time:', sec)
        sec += 1;
        timer.textContent = sec
        setTimeout(cycle, 1000)
    }
}

function stopTimer(){
    if (stopTime === false){
        stopTime = true
    }
}

let color = 1;
let count = 0;
//this function is responsible for switching the colors and text for each trial
function update(){
    if(count < 9){
        if(color === 1){
            colorDiv.style.backgroundColor = 'green'
            // globalCount++
            wait(5000).then(()=>{
                color--;
                count++
                update()
            })
        }
        if(color === 0){
            colorDiv.style.backgroundColor = 'red'
            wait(3000).then(()=>{
                color++;
                count++
                update()
            })
        }
    }
    if(count === 9){
        colorDiv.style.backgroundColor = 'white'
        finished.textContent = 'Finished!'
    }
}

//this function strings together the multiple trials, seperated by 30 second breaks
// let loop = 0;

// function loop(){

// }

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

startButton.addEventListener('click', (e)=>{
    e.preventDefault()
    update()
})