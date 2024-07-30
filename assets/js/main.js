/*=== SCROLL REVEAL ANIMATION=== */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
    reset: false
})

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`) 
sr.reveal(`.home__subtitle`, {delay: 500}) 
sr.reveal(`.home__elec` , {delay: 550}) 
sr.reveal(`.home__img` , {delay: 600}) 
sr.reveal(`.home__car-data` , {delay: 650, interval:100, origin:'bottom'})
sr.reveal(`.home__button` , {delay: 700, origin:'bottom'}) 
sr.reveal(`.about__data, .offer__img` , { origin:'right'})
sr.reveal(`.about__group, .offer__data` , { origin:'left'})
sr.reveal(`.features__map` , {delay:600, origin:'bottom'})
sr.reveal(`.features__card` , {interval: 300})
sr.reveal(`.featured__card, .footer__content` , {interval: 100});

/* ===  POPULAR SWIPER NB bad swiper  === */

let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    

    pagination:{
        el: "swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {

        640: {
            slidesPerView: 2,
            spaceBetween: 20,
           
          },
        
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
         
        },
        1024: {
          
          slidePerView: 5,
          spaceBetween: 50,
        },
      },
}); 

/* ===MIXITUP FILTER FEATURED=== */

let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 600
    }
}); 


/*===link active feature=== */

const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add('active-featured')
} 
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))


/*=== SHOW SCROLL UP  === */

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*===show menu=== */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===menu show=== */
/*===valid if constant exist=== */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* ===menu hidden=== */

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* ===valid if constant exist=== */

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* ===remove menu mobile=== */

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* === CHANGE BACKGROUND HEADER === */

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
window.addEventListener('scroll', scrollHeader)


/* === SCROLL SECTIONS ACTIVE LINKS === */

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
