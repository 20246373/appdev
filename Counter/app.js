const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

let count = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (button) => {
        const styles = button.currentTarget.classList
        if (styles.contains('random')){
            getRandomNum()
            console.log("click")
        }
        else if (styles.contains('Reset')){
            count = 0
        }
        else if (styles.contains('increment')){
            count++
        }
        else if (styles.contains('decrement')){
            count--
        }
        else {
            count = 0
        }
        value.textContent = count

        if (count > 0) {
            value.style.color ="green"
        }
        else if (count < 0){
            value.style.color ="red"
        }
    })
})

getRandomNum = () => {
    if (count > 0) {
        count = (Math.floor(Math.random() * 100)) * -1
    }
    else if (count < 0) {
        count = Math.floor(Math.random() * 100)
    }
    else {
        count = Math.floor(Math.random() * 100)
    }
    
}

