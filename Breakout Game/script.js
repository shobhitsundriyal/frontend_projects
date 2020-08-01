const rulesbtn = document.getElementById('rules-btn')
const closebtn = document.getElementById('close-btn')
const rules = document.getElementById('rules')
const dark = document.getElementById('dark-mode')
const light = document.getElementById('light-mode')
const body = document.getElementsByTagName("BODY")[0];

// toggle rule
rulesbtn.addEventListener('click', () => rules.classList.add('show'))
closebtn.addEventListener('click', () => rules.classList.remove('show'))
dark.addEventListener('click', () => {
    light.classList.add('disp')
    body.classList.add('dm')
    // more things to add
})
light.addEventListener('click', () => {
    body.classList.remove('dm')
    light.classList.remove('disp')
})
