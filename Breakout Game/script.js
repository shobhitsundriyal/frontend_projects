const rulesbtn = document.getElementById('rules-btn')
const closebtn = document.getElementById('close-btn')
const rules = document.getElementById('rules')

// toggle rule
rulesbtn.addEventListener('click', () => rules.classList.add('show'))
closebtn.addEventListener('click', () => rules.classList.remove('show'))
