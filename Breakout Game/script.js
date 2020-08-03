const rulesbtn = document.getElementById('rules-btn')
const closebtn = document.getElementById('close-btn')
const rules = document.getElementById('rules')
const dark = document.getElementById('dark-mode')
const light = document.getElementById('light-mode')
const body = document.getElementsByTagName("BODY")[0];
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d') // to draw

//Ball properties 
const ball = {
    x: canvas.width /2,
    y: canvas.height / 2,
    size: 10,
    color: '#0095dd',
    //for animation
    speed: 4,
    dx: 4,
    dy: -4
}

//Paddle properties
const paddle = {
    x: canvas.width /2 - 40,//-half width of the paddle
    y: canvas.height - 20,
    w: 80,
    h: 10,
    color: '#0095dd',
    speed: 8,
    dx: 0

}

function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle = paddle.color
    ctx.fill()
    ctx.closePath()
}

function drawBall() {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2)//last 2 -> start angle, end angle
    ctx.fillStyle = ball.color//stroke just creates holllow circle
    ctx.fill()
    ctx.closePath()
}

function drawEverything() {
    drawBall()
    drawPaddle()
}

// toggle rule
rulesbtn.addEventListener('click', () => rules.classList.add('show'))
closebtn.addEventListener('click', () => rules.classList.remove('show'))
dark.addEventListener('click', () => {
    light.classList.add('disp')
    body.classList.add('dm')
    canvas.classList.add('dm')
    paddle.color = "#f0f0f0" //canvas=1f4068, bg=1b1b2f
    ball.color = "#fff"
    ctx.clearRect(0,0, canvas.width, canvas.height)//clear the canvas
    drawEverything()
    // more things to add, canvas change
})
light.addEventListener('click', () => {
    body.classList.remove('dm')
    light.classList.remove('disp')
    canvas.classList.remove('dm')
    paddle.color = "#0095dd" //canvas=1f4068, bg=1b1b2f
    ball.color = "#0095dd"
    ctx.clearRect(0,0, canvas.width, canvas.height)//clear the canvas
    drawEverything()
})

drawEverything()