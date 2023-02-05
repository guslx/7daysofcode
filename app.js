const firstNum = document.querySelector('[data-js="first-num"]')
const secondNum = document.querySelector('[data-js="second-num"]')
const thirdNum = document.querySelector('[data-js="third-num"]')
const fourthNum = document.querySelector('[data-js="fourth-num"]')

const valueIncrement = (h2Number, maxValue, velocity, string = '+') => {
    window.addEventListener('load', event => {
        let counter = 0

        const timer = setInterval(() => {
            if(counter === maxValue) {
                clearInterval(timer)
            }

            h2Number.textContent = `${counter}${string}`
            counter++
        }, velocity)
    })
}

valueIncrement(firstNum, 400, 5)
valueIncrement(secondNum, 100, 10)
valueIncrement(thirdNum, 20, 80, 'k')
valueIncrement(fourthNum, 500, 5)