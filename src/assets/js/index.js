/**
 * querySelectors
 */
const body = document.querySelector('body')
const menuButton = document.querySelector('.header__hamb')
const navbar = document.querySelector('.navbar')
const btnGallery = document.querySelector('.fourth__link')
const gallery = document.querySelector('.fourth__gallery')
const loadContainer = document.querySelector('.loader-wrapper')
const cards = document.querySelectorAll('.second__card')
const grid = document.querySelector('.grid')

/**
 * hamburger menu
 * block our body if we have menu active
 */
function hamburgerMenu () {
    navbar.classList.toggle('active')
    navbar.classList.contains('active') ? body.classList.add('no-scroll') : body.classList.remove('no-scroll')
}

/**
 * function click card
 */
function clickCard () {
    cards.forEach(card => {
        card.addEventListener('click', () => {
            location.reload()
        })
    })
}

/**
 *masonry grid gallery
 */
window.onload = () => {
    const masonry = new Masonry(grid, {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        itemSelector: '.grid-item',
        originBottom: false,
        percentPosition: true
    })
}


/**
 * gallery modal window
 */
document.addEventListener('click', function (event){
    if (!event.target.classList.contains('gallery-img')) {
        return;
    }
    const src = event.target.getAttribute('src')
    document.querySelector('.modal-img').src = src
    const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
    myModal.show()
})

/**
 * block body if we have preloader
 */
window.addEventListener('DOMContentLoaded', function (event) {
    body.classList.add('no-scroll')
    setTimeout(function() {
        body.classList.remove('no-scroll')
        loadContainer.style.display = 'none'
    }, 2500)
})

/**
 * event click Hamburger menu
 */
menuButton.addEventListener('click', hamburgerMenu)

/**
 * event to hide gradient and open gallery
 */
btnGallery.addEventListener('click', () => {
    gallery.classList.toggle('active')
})

/**
 * run our function click card
 */
clickCard ()
