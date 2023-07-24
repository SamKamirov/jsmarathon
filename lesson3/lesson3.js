const upButton = document.querySelector('.up-button');
console.log(upButton)
const buttonDown = document.querySelector('.down-button');
console.log(buttonDown)
const container = document.querySelector('.container')

const sideBar = document.querySelector('.sidebar');
console.log(sideBar)
const mainSlide = document.querySelector('.main-slide');
console.log(mainSlide)

const slidesCount = mainSlide.querySelectorAll('div').length;
console.log(slidesCount)

let slideIndex = 0;

sideBar.style.top = `-${(slidesCount - 1)* 100}vh`;

upButton.addEventListener('click', () => {
    changeSlide('up')
    console.log(slideIndex)
})

buttonDown.addEventListener('click', () => {
    changeSlide('down')
    console.log(slideIndex)
})

function changeSlide(direction) {
    if (direction === 'up') {
        slideIndex++
        if (slideIndex == slidesCount) {
            slideIndex = 0
        }
    } else if (direction === 'down') {
        slideIndex--
        if (slideIndex < 0) {
            slideIndex = slidesCount - 1 
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${slideIndex * height}px)`
    sideBar.style.transform = `translateY(${slideIndex * height}px)`
}