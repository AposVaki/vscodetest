let color = undefined

document.querySelector('#btn').addEventListener('click', function() {
    onClickMeClicked()
})

function onClickMeClicked() {
    updateBg()
}

function updateBg() {
    color = getRandomBgColor()
    showBgColor(color)
}


function getRandomBgColor() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const hex = [...letters, ...digits]

    color = '#'
    for (let i = 1; i <= 6; i++) {
        let randomHex = Math.floor(Math.random() * hex.length)
        color += hex[randomHex]
    }
    return color
}

function showBgColor(bgColor) {
    document.querySelector('#hex').innerHTML = bgColor
    document.body.style.backgroundColor = bgColor
}