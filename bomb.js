let inputEl = document.getElementById("input")
let timer = document.getElementById("timer")
let count = 10
let interval = setInterval(function () {
    count = count - 1
    timer.textContent = count
    if (count === 0) {
        timer.textContent = "Boom!!!"
        clearInterval(interval)
    }
}, 1000)

inputEl.addEventListener("keydown", function (event) {
    let bombDefuserText = inputEl.value
    if (event.key === "Enter" && bombDefuserText === "defuse" && count !== 0) {
        timer.textContent = "You did it !!!"
        clearInterval(interval)
    }
});