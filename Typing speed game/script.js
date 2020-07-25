const word = document.getElementById('word')
const text = document.getElementById('text')
const scoreEl = document.getElementById('score')
const timeEl  = document.getElementById('time')
const endgameEl = document.getElementById('end-game-container')
const settingsbtn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')
const settingsForm = document.getElementById('settings-form')
const difficultySelect = document.getElementById('difficulty')

//some words
const words = [
    'sign',
    'tense',
    'airplane',
    'boat',
    'javascript'
]

let randomWord;

let score = 0;

let time = 10;

//ternary operator fetch difficulty, if not present default is easy
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy'

//to show up locally stored difficulty on page, else it will show only easy on reload
difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy'


const timeInterval = setInterval(updateTime, 1000)//1000ms -> 1s every 1s updateTime fuction will we called

text.focus(); //directly start typing in input text

function getRandomWord() {
    // Use api here later
    return words[Math.floor(Math.random() * words.length)]
}

console.log(getRandomWord())

function addWordToDOM() {
    randomWord = getRandomWord()
    word.innerHTML = randomWord
}

function updateScore() {
    score++
    scoreEl.innerHTML = score;
}

function updateTime() {
    //console.log(time)
    time--
    timeEl.innerHTML = time + 's'

    if (time == 0) {
        clearInterval(timeInterval)
        //end game
        gameOver()
    } 
}

function gameOver() {
    endgameEl.innerHTML = `
    <h1> Time over </h1>
    <p> Your score is ${score}</p>
    <button onclick='location.reload()'>Reload</button>
    `
    endgameEl.style.display = 'flex'
}

addWordToDOM()

//Event Listener
text.addEventListener('input', e=>{
    const insertedText = e.target.value; //captures whatever we type in text box
    //console.log(insertedText)
    if (insertedText == randomWord) {
        addWordToDOM() //get new word
        updateScore();
        e.target.value = '' //clear the input text 

        time += 5
        updateTime()
    }
})

// Settings select
settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);// store locally so that data is not lost when reloaded
});