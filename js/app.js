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

// ciclo l'array di oggetti

images.forEach((figure, index) => {
    //console.log(figure, index)
    const mainHtmlString = `<figure class="figure-box">
                                <img class="thumb-img" src="./${figure.image}">
                                <div class="figure-text">
                                    <h3 class="figure-title">${figure.title}</h3>
                                    <p class="figure-par">${figure.text}</h3>
                                </div>
                                <div class="overlay"></div>
                            </figure>`
    
    const thumbHtmlString = `<img class="thumb-img" src="./${figure.image}">`

    imgBoxDOMElement.innerHTML += mainHtmlString
    thumbBoxDOMElement.innerHTML += thumbHtmlString
})
    
