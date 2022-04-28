const weed = document.querySelector('.weed-img')
const clickAnimation = document.querySelector('.click-animation')
const scoreElement = document.querySelector('.score')
const cardArray = [...document.querySelectorAll('.card')]
let score = 0;


let helpersArray = [];
let helping = 0;
let clickValue = 1;


cardArray.forEach(card => {
    card.addEventListener('click', ()=>{
        let cardCost = card.children[2].textContent;
        if(score >= cardCost){
            score -= cardCost
            helpersArray.push(card)
            console.log(helpersArray)
            card.children[2].innerHTML = `${Math.floor(cardCost * 1.1)}`
        }

        helping = helpersArray.reduce((acc , item) =>{
            return acc += parseInt(item.lastElementChild.textContent);
        }, 0)
    })
})

weed.addEventListener('click', ()=>{
    const createClickScore = document.createElement('p');
    createClickScore.innerHTML = `+${clickValue}`
    createClickScore.style.setProperty('--top-value', getRandomNumber(10,50) + '%' )
    createClickScore.style.setProperty('--left-value', getRandomNumber(20,80) + '%' )
    clickAnimation.appendChild(createClickScore)
    createClickScore.classList.add('clickAnimation')
    setTimeout(()=>{
        clickAnimation.removeChild(createClickScore)
    },1000)
    clickValue = 1 + helping * 0.1
    score += clickValue
    scoreElement.innerHTML = `<p>Score:${Math.floor(score)} <p>helping: ${helping}/s</p></p>`
})


function getRandomNumber(min , max){
    return Math.floor(Math.random() * (max - min) + min)
}

setInterval(()=>{
    console.log(score)
},1000)

setInterval(()=>{
    if(helping > 0){
        score += helping
    }
    scoreElement.innerHTML = `<p>Score:${Math.floor(score)}</p> <p>helping: ${helping}/s</p>`
},1000)

