const board = document.querySelector('#board');
const colors = ['#9B05AB', '#F7C839', '#07F7BB', '#7AADA0', '#079BF7', '#00ffee', '#682121', '#39F73C', '#F78020' ,'#F7B120' ,'#AD4C6B']
const SQUARES_NUMBER = 500;
const startButton = document.querySelector('.start')
const endButton = document.querySelector('.stop')

console.log(SQUARES_NUMBER)
console.log(board)

for (let index = 0; index < SQUARES_NUMBER; index++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', () => {
        setColor(square);
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    board.append(square)
}

const squares = document.querySelectorAll('.square')

startButton.addEventListener('click', () => {
    startButton.classList.add('active')
    mozaic(squares)
})

endButton.addEventListener('click', () => {
    startButton.classList.remove('active')
})

squares.forEach(element => {
    element.addEventListener('click', () => {
        counter(element)
        clickedAnimation(counter(element))
    })
});

function setColor(item) {
    const currentColor = getRandomColor()
    item.style.backgroundColor = currentColor;
    item.style.boxShadow = `0 0 30px ${currentColor}, 0 0 30px ${currentColor}`
    return currentColor
}

function setDefault(item) {
    item.style.transition = ''
}

function removeColor(item) {
    item.style.backgroundColor = '#1d1d1d'
    item.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const value = Math.floor(Math.random() * colors.length)
    return colors[value];
}

const freqence = 5

function mozaic(items) {
    console.log(startButton.classList.contains('active'))
    setInterval(() => {
        if (startButton.classList.contains('active')) {
            for (let i = 0; i < items.length; i++) {
                setTimeout(() => {
                    if (i % freqence != 0 && i != 0) {  
                        let count = i
                        setTimeout(() => {
                            setColor(items[i])
                        }, 500 + count * 2);
                        setTimeout(() => {
                            removeColor(items[i])
                        }, 2000 + count * 2.5);
                    } else {
                            items[i].style.backgroundColor = '#1d1d1d'
                    }
                }, 1000)
            }
        }
    }, 3500)
}

function counter(item) {
    for (let index = 0; index < squares.length; index++) {
        let element = squares[index];
        if(element === item) {
           return index            
        }
    }
}

function linearAnimation(item, index) {
    item[index].style.transition = '0.01s'
    item[index].style.backgroundColor = setColor(item[index])

    setTimeout(() => {
        item[index].style.transition = '0.5s'
        removeColor(item[index]) 
        setDefault(item[index])
    }, 50); 
}

function clickedAnimation(item) {
    let renderTime = 80

    if (Math.floor(item / 10) % 2 == 0 && item != 0) {
        let current = 20 - (item % 10)
        console.log('закрасить вправо ',current)
        for (let index = item + 1; index < item + current; index++) {
            setTimeout(() => {
                linearAnimation(squares, index)
            }, renderTime);
            renderTime += 50
        }
        renderTime = 0
        for (let index = item - 1; index >= item - (20 - current); index--) {
            setTimeout(() => {
                linearAnimation(squares, index)
            }, renderTime);
            renderTime += 50
        }
        renderTime = 0
        for (let index = item+20; index < SQUARES_NUMBER; index+=20) {
            setTimeout(() => {
                linearAnimation(squares,index)
            }, renderTime);
            renderTime += 50
        }
        renderTime = 0
        for (let index = item-20; index >= 0; index-=20) {
            setTimeout(() => {
                linearAnimation(squares,index)
            }, renderTime);
            renderTime += 50
        }
    } else {
        renderTime = 0
        current = 10 - (item % 10)
        console.log(current)
        for (let index = item + 1; index < item + current; index++) {
            setTimeout(() => {
                linearAnimation(squares, index)
            }, renderTime);
            renderTime += 50
        }
        renderTime = 0
        for (let index = item - 1; index >= item - (20 - current); index--) {
            setTimeout(() => {
                linearAnimation(squares, index)
            }, renderTime);
            renderTime += 50
        }
        renderTime = 0
        for (let index = item+20; index < SQUARES_NUMBER; index+=20) {
            setTimeout(() => {
                linearAnimation(squares,index)
            }, renderTime);
            renderTime += 50
        }
        renderTime = 0
        for (let index = item-20; index >= 0; index-=20) {
            setTimeout(() => {
                linearAnimation(squares,index)
            }, renderTime);
            renderTime += 50
        }
    }    
}

number = 2
power = 2

let res = 1;

for (let index = 1; index <= power; index++) {
    res *= number 
}
console.log('square: ',res)