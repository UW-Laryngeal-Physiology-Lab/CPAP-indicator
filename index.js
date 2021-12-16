let colorDiv = document.getElementById('color')
let startButton = document.getElementById('start')

function update(){
    let globalCount = 0
    let color = 1
    //1 = green 0 = red
    if (globalCount === 9){
        $('color').hide()
        return
    }
    if(color === 1){
        colorDiv.style.backgroundColor = 'green'
        color = 0; 
        globalCount++
        wait(5000).then(()=>{
            update()
            console.log('update 5000')
        })
    }
    if(color === 0){
        colorDiv.style.backgroundColor = 'red'
        wait(3000).then(()=>{
            update()
            console.log('update 3000')
        })
        color = 1
    }
}

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

startButton.addEventListener('click', (e)=>{
    e.preventDefault()
    update()
})