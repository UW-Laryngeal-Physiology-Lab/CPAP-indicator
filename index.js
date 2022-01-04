let colorDiv = document.getElementById('color')
let startButton = document.getElementById('start')
let finished = document.getElementById('finished-indicator')
let timer = document.getElementById('timer')
let boxLabel = document.getElementById('indicator')
let trialIndicator = document.getElementById('trial-indicator')

//Stopwatch
function time(seconds){
    timer.textContent = JSON.stringify(seconds)
    wait(1000).then(()=>{
        if(seconds > 1){
            seconds--
            time(seconds) 
        }else{
            return
        }
    })
}

let color = 1;
let count = 0;
let globalCount = 0;
//this function is responsible for switching the colors and text for each trial
function update(){
    boxLabel.textContent = 'Color Indicator'
    trialIndicator.textContent = `Trial ${globalCount + 1}`
    if(count < 9){
        if(color === 1){
            time(5)
            colorDiv.style.backgroundColor = 'green'
            wait(5000).then(()=>{
                color--;
                count++
                update()
            })
        }
        if(color === 0){
            colorDiv.style.backgroundColor = 'red'
            time(3)
            wait(3000).then(()=>{
                color++;
                count++
                update()
            })
        }
    }
    if(count === 9){
        globalCount++
        colorDiv.style.backgroundColor = '#f8f9fa'
        timer.textContent = ''
        finished.textContent = 'Finished!'
        wait(1000).then(()=>{
            color = 1
            count = 0
            finished.textContent = ''
            subjectBreak()
            wait(31000).then(()=>{
                if(globalCount <= 7){
                    update()
                }else{
                    boxLabel.textContent = ''
                    timer.textContent = ''
                    trialIndicator.textContent = ''
                    finished.textContent = 'Full Test Complete! Please refresh the page.'
                    return
                }
            })
        })
    }
}

function subjectBreak(){
    boxLabel.textContent = 'Break Time!'
    time(30)
    return
}

function darker(){
    startButton.style.backgroundColor = '#69b578'
}

function lighter(){
    startButton.style.backgroundColor = '#3a7d44'
}

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

startButton.addEventListener('mousedown', (e)=>{
    e.preventDefault()
    darker()
    update()
})

startButton.addEventListener('mouseup', (e)=>{
    e.preventDefault()
    lighter()
})