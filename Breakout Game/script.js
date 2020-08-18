const rulesbtn = document.getElementById('rules-btn')
const closebtn = document.getElementById('close-btn')
const rules = document.getElementById('rules')
const dark = document.getElementById('dark-mode')
const light = document.getElementById('light-mode')
const body = document.getElementsByTagName("BODY")[0];
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d') // to draw


let score = 0;

const brick_rows_count = 9
const brick_col_count = 5

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

// Brick props
const brick_info = {
    w:70,
    h:20,
    padding:10,
    offsetX:45,
    offsetY:60,
    visible:true
}

// create bricks (logically)
const bricks =  []
for (let i=0; i<brick_rows_count; i++){
    bricks[i] = []
    for (let j=0; j<brick_col_count; j++){
        const x = i * (brick_info.w + brick_info.padding) + brick_info.offsetX
        const y = j * (brick_info.h + brick_info.padding) + brick_info.offsetY
        bricks[i][j] = {x, y, ...brick_info}// copy all brick_info too

    }
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

function drawScore() {
    ctx.font = '20px Arial'
    ctx.fillText(`Score: ${score}`, canvas.width-100, 30)
}

function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath()
            ctx.rect(brick.x, brick.y, brick.w, brick.h)
            ctx.fillStyle = brick.visible ? paddle.color : 'transparent'
            ctx.fill()
            ctx.closePath()
        })
    })
}

//Move paddle
function movePaddle() {

    paddle.x = paddle.x + paddle.dx

    //stop paddle at the ends
    if (paddle.x + paddle.dx > canvas.width){
        paddle.x = canvas.width - paddle.w
    }
    if (paddle.x < 0) {
        paddle.x = 0
    }
}

//Move Ball
function moveBall() {
    ball.x += ball.dx
    ball.y += ball.dy

    // colision left/right
    if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0){
        ball.dx *= -1
    } 
    //colision top/bottom
    if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0){
        ball.dy *= -1
    }

    if (ball.y + ball.size > canvas.height){
        // Reset everything
    }

    //paddle colision
    if(
        ball.x - ball.size > paddle.x &&
        ball.y + ball.size > paddle.y &&
        ball.x + ball.speed < paddle.x + paddle.w
    ) {
        ball.dy = -ball.dy
    }
    
    //Brick collision
    bricks.forEach(column => {
        column.forEach(brick => {
            if (brick.visible){
                if (
                    ball.x - ball.size > brick.x &&
                    ball.x + ball.size < brick.x + brick.w &&
                    ball.y + ball.size > brick.y &&
                    ball.y - ball.size < brick.y + brick.h 
                ){
                    ball.dy *= -1
                    brick.visible = false

                    increaseScore()
                }
            }
        })
    })

}

function increaseScore() {
    score++
    
}

function drawEverything() {
    //clear canvas first
    ctx.clearRect(0,0, canvas.width, canvas.height)

    drawBall()
    drawPaddle()
    drawScore()
    drawBricks()
}

//Update canvas => animation
function update() {

    movePaddle()
    moveBall()

    drawEverything()

    requestAnimationFrame(update)
}

// key press function based on eventListener below
function keyDown(e){
    if (e.key === 'Right' || e.key === 'ArrowRight'){
        paddle.dx = paddle.speed
    }
    else if (e.key === 'Left' || e.key === 'ArrowLeft'){
        paddle.dx = -paddle.speed
    }
}

function keyUp(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight' || e.key === 'Left' || e.key === 'ArrowLeft'){
        paddle.dx = 0
    }

}// need to check particular keyUp

//Keyboard event Listeners
document.addEventListener('keydown', keyDown) //key press
document.addEventListener('keyup', keyUp) //key release

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

//drawEverything()
update()