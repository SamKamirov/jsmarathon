const startButton = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['red','green','yellow','black', '#16D9E3', '#C6F56E', '#FFE331', '#E8BE74', '#FF9F73', '#F56E77']
let time = 0
let score = 0

function startGame() {
    setInterval(decreaseTime,1000)
    createRandomCircle()
    setTime(time)
}

function finishGame() {
    board.innerHTML = `<h1>Cчёт: <span class = "primary">${score}</span></h1`
    timeEl.parentNode.classList.add('hide')
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function getRandom(min,max) {
    return Math.round(Math.random() * (max-min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandom(10,60)
    const currentColor = getRandomColor();
    const {width, height} = board.getBoundingClientRect()
    const x = getRandom(0,width-size)
    const y = getRandom(0,height-size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top =  `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = getRandomColor()

    board.append(circle)
} 

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

startButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('time-btn')) {
        time = parseInt(evt.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('circle')) {
        score++
        evt.target.remove()
        createRandomCircle()
    }
})

