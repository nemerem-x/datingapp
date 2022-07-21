// Remember to import the data and Dog class!
import dogs from "./data.js";
import Dog from "./dog.js";

const statusreject = document.getElementById('statusreject')
const statuslove = document.getElementById('statuslove')
let isWaiting = false

function newData(){
    const nextData = dogs.shift()
    return nextData
}

function theEnd(){
    isWaiting = true
    document.getElementById('profile').innerHTML = `
    <p>There are no more <br>dogs in your area</p>`
}

function reject(){
    if(!isWaiting){
        if(dogs.length > 0){
            statusreject.classList.add('rejected')
            isWaiting = true
            setTimeout(() => {
                render()
                statusreject.classList.remove('rejected')
                isWaiting = false
            },1000)
        }   else {
            statusreject.classList.add('rejected')
            setTimeout(()=>{
                theEnd()
                statusreject.classList.remove('rejected')
            },2000)
        } 
    }
}

function love(){
    if(!isWaiting){
        if(dogs.length > 0){
            statuslove.classList.add('loved')
            isWaiting = true
            setTimeout(() => {
                render()
                statuslove.classList.remove('loved')
                isWaiting = false
            },1000)
        } else {
            statuslove.classList.add('loved')
            setTimeout(()=>{
                theEnd()
                statuslove.classList.remove('loved')
            },2000)
        }
    }
}

document.getElementById('reject').addEventListener('click', reject)
document.getElementById('love').addEventListener('click', love)

function render(){
    let dogData = new Dog(newData())
    document.getElementById('profile').innerHTML = dogData.getDogHtml()
}

render()