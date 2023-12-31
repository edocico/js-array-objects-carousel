console.log('ok')

// inizializzo l'array di oggetti

const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

//console.log(images)

// recupero elementi necessari dal DOM
const leftArrowDOMElement = document.querySelector('.left-arrow')
//console.log(leftArrowDOMElement)

const rightArrowDOMElement = document.querySelector('.right-arrow')
//console.log(rightArrowDOMElement)

const imgBoxDOMElement = document.querySelector('.img-box')
//console.log(imgBoxDOMElement)

const thumbBoxDOMElement = document.querySelector('.thumbnail-box')
//console.log(thumbBoxDOMElement)

const startDOMElement = document.querySelector('.start-btn')

const stopDOMElement = document.querySelector('.stop-btn')

const invertDOMElement = document.querySelector('.invert-btn')

// ciclo l'array di oggetti

images.forEach((figure, index) => {
    //console.log(figure, index)
    const mainHtmlString = `<figure class="figure-box d-none">
                                <img class="figure-img" src="./${figure.image}">
                                <div class="figure-text">
                                    <h3 class="figure-title">${figure.title}</h3>
                                    <p class="figure-par">${figure.text}</h3>
                                </div>
                                
                            </figure>`
    
    const thumbHtmlString = `<div class="t-box">
                                <img class="thumb-img" src="./${figure.image}">
                                <div class="overlay"></div>
                             </div>`

    imgBoxDOMElement.innerHTML += mainHtmlString
    thumbBoxDOMElement.innerHTML += thumbHtmlString
})

const fBoxDOMElement = document.querySelectorAll('.figure-box')

const overThumbDOMElement = document.querySelectorAll('.overlay')

const tBoxDOMElement = document.querySelectorAll('.t-box')
console.log(tBoxDOMElement)

fBoxDOMElement[0].classList.remove('d-none')

overThumbDOMElement[0].classList.add('d-none')
tBoxDOMElement[0].classList.add('box-shadow')


let imageCounter = 0

//controllo forward per il carosello 
rightArrowDOMElement.addEventListener('click', autoPlay )
   


// controllo backward per il carosello
leftArrowDOMElement.addEventListener('click', revAutoPlay)
    

// dichiaro una variabile con scope globale
let scrollAutoPlay 

// autoplay function sullo start button
startDOMElement.addEventListener('click', function() {
     scrollAutoPlay = setInterval(autoPlay, 3000);
    
})

// stop autoplay
stopDOMElement.addEventListener('click', function() {
    clearInterval(scrollAutoPlay)
})

// invert autoplay

invertDOMElement.addEventListener('click', function() {
    if (scrollAutoPlay = setInterval(autoPlay, 3000)) {
        clearInterval(scrollAutoPlay)
        scrollAutoPlay = setInterval(revAutoPlay, 3000)
    } else if (scrollAutoPlay = setInterval(revAutoPlay, 3000)) {
        clearInterval(scrollAutoPlay)
        scrollAutoPlay = setInterval(autoPlay, 3000)
    }
})


// funzione avanzamento

function autoPlay() {
    fBoxDOMElement[imageCounter].classList.add('d-none')
    
    overThumbDOMElement[imageCounter].classList.remove('d-none')
    tBoxDOMElement[imageCounter].classList.remove('box-shadow')
    
    imageCounter++
     
    if (imageCounter >= fBoxDOMElement.length) {
        imageCounter = 0
    }
    
    fBoxDOMElement[imageCounter].classList.remove('d-none')
    
    
    overThumbDOMElement[imageCounter].classList.add('d-none')
    tBoxDOMElement[imageCounter].classList.add('box-shadow')
    
}

// funzione di backward slide

function revAutoPlay() {
    fBoxDOMElement[imageCounter].classList.add('d-none')
    
    overThumbDOMElement[imageCounter].classList.remove('d-none')
    
    tBoxDOMElement[imageCounter].classList.remove('box-shadow')
    
    imageCounter--
    
    if (imageCounter < 0) {
        imageCounter = fBoxDOMElement.length - 1
    }
   
    fBoxDOMElement[imageCounter].classList.remove('d-none')
    
    
    overThumbDOMElement[imageCounter].classList.add('d-none')
    tBoxDOMElement[imageCounter].classList.add('box-shadow')
    
}

/* // quando entro con il mouse su una slide l'autoplay si interrompe
fBoxDOMElement.addEventListener('mouseenter', () => {
    console.log(mouseenter)
    clearInterval(scrollAutoPlay)
    scrollAutoPlay = null
})
// quando esco con il mouse dalla slide
fBoxDOMElement.addEventListener('mouseleave', () => {
    if (!scrollAutoPlay) {
        scrollAutoPlay = setInterval(autoPlay, 3000)
    }
}) */

// funzione go to

/* function goToSlide() {
   fBoxDOMElement[imageCounter] 
}

tBoxDOMElement.forEach((thumb, index) => {
    thumb.addEventListener('click', function () {
        goToSlide[index]
    })
}) */
    
