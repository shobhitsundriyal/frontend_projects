const rulesbtn = document.getElementById('rules-btn')
const closebtn = document.getElementById('close-btn')
const rules = document.getElementById('rules')
const dark = document.getElementById('dark-mode')
const light = document.getElementById('light-mode')
const body = document.getElementsByTagName("BODY")[0];
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d') // to draw

//create ball
const ball = {
    x: canvas.width /2,
    y: canvas.height / 2,
    size: 10,
    //for animation
    speed: 4,
    dx: 4,
    dy: -4
}

function drawBall() {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2)
    ctx.strokeStyle = '#0095dd'
    ctx.stroke()
    ctx.closePath()
}

// toggle rule
rulesbtn.addEventListener('click', () => rules.classList.add('show'))
closebtn.addEventListener('click', () => rules.classList.remove('show'))
dark.addEventListener('click', () => {
    light.classList.add('disp')
    body.classList.add('dm')
    // more things to add, canvas change
})
light.addEventListener('click', () => {
    body.classList.remove('dm')
    light.classList.remove('disp')
})
