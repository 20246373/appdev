const colors = ["green", "red", "blue", "yellow", "f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors [randomNumber]
    color.textcontent = color [randomNumber]
})

getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}