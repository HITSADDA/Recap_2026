const btn = document.getElementById('btn')
const field = document.getElementById('field')

function pick_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function generateRandomColor() {
    const hex_range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = "#"
    for (let i = 1; i <= 6; i++) {
        color += hex_range[pick_random(0, 14)]
    }

    field.textContent = color
    field.style.backgroundColor = color
}

function generateRandomColor2() {
    let color = `#${Math.random().toString(16).slice(2, 8).toUpperCase()}`
    field.textContent = color
    field.style.backgroundColor = color
}

btn.addEventListener('click', generateRandomColor)