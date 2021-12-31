let colorDiv = document.getElementById('color')
let startButton = document.getElementById('start')
let finished = document.getElementById('finished-indicator')
let timer = document.getElementById('timer')

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
//this function is responsible for switching the colors and text for each trial
function update(){
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
        colorDiv.style.backgroundColor = 'white'
        timer.textContent = ''
        finished.textContent = 'Finished!'
    }
}

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

startButton.addEventListener('click', (e)=>{
    e.preventDefault()
    update()
})