const word = document.getElementById('word')
const text = document.getElementById('text')
const scoreEl = document.getElementById('score')
const timeEl  = document.getElementById('time')
const endgameEl = document.getElementById('end-game')
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

addWordToDOM()

//Event Listener
text.addEventListener('input', e=>{
    const insertedText = e.target.value; //captures whatever we type in text box
    //console.log(insertedText)
    if (insertedText == randomWord) {
        addWordToDOM() //get new word
        updateScore();
        e.target.value = '' //clear the input text 
    }
})