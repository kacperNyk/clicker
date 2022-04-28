const weed = document.querySelector('.weed-img')
const scoreElement = document.querySelector('.score')
const cardArray = [...document.querySelectorAll('.card')]
let score = 0;


let helpersArray = [];
let helping;


cardArray.forEach(card => {
    card.addEventListener('click', ()=>{
        helpersArray.push(card)
        console.log(helpersArray)
        card.children[2].textContent *= 1.1

        helping = helpersArray.reduce((acc , item) =>{
            return acc += parseInt(item.lastElementChild.textContent);
        }, 0)
    })
})

setInterval(()=>{
    score += helping
    scoreElement.innerHTML = `<p>Score:${score}</p>`
},1000)