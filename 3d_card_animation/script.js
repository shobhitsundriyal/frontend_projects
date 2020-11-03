card = document.querySelector('.card')
container = document.querySelector('.container')
title = document.querySelector('.title')
sneaker = document.querySelector('.sneaker img')
purchase = document.querySelector('.purchase button')
description = document.querySelector('.info h3')
sizes = document.querySelector('.sizes')

container.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth/2 - e.pageX)/10
    let yAxis = (window.innerHeight/2 - e.pageY)/10

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//mouse In 
container.addEventListener('mouseenter', (e)=>{
    card.style.transition = 'none'

    title.style.transform = 'translateZ(10rem)'
    sneaker.style.transform = 'translateZ(9rem) rotate(25deg)'
    description.style.transform = 'translateZ(8rem)'
    purchase.style.transform = 'translateZ(6.5rem)'
    sizes.style.transform = 'translateZ(7rem)'
});

//snap back
container.addEventListener('mouseleave', (e)=>{
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = 'translateZ(0rem)'
    sneaker.style.transform = 'translateZ(0) rotate(0deg)'
    description.style.transform = 'translateZ(0)'
    purchase.style.transform = 'translateZ(0)'
    sizes.style.transform = 'translateZ(0)'
});