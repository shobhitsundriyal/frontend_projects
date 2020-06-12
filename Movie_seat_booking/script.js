const container = document.querySelector('.container')
const seat = document.querySelectorAll('.row .seat:not(.occupied)')

const count = document.getElementById('count')
const total = document.getElementById('total')
const movie = document.getElementById('movie')

let ticketPrice = +movie.value //To convert into number
//console.log(ticketPrice)

function update_total() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    const seatCount = selectedSeats.length
    //console.log(seatCount)
    count.innerText = seatCount
    total.innerText = seatCount * ticketPrice
}

//Movie select event
movie.addEventListener('change', e => {
    ticketPrice = +e.target.value
    update_total()
})

//Seat click event
container.addEventListener('click', (e) => {
    //console.log(e.target)
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected') //Can add or remove classes too
        update_total()
    }
})