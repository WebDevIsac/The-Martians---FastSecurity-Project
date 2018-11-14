
// ScrollSpy
const sections = document.querySelectorAll( '.section' );

window.onscroll = ( ) => {
  const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

  for ( let s in sections )
    if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
      const id = sections[ s ].id;
      document.querySelector( '.active' ).classList.remove( 'active' );
      document.querySelector( `a[href*=${ id }]` ).classList.add( 'active' );
    }
}


// Function to toggle class for the mobile menu

document.getElementById("burger-icon").addEventListener("click",  () => {

  document.getElementById("burger-icon").classList.toggle("transform");

  document.getElementById("mobile-menu").classList.toggle("toggle");

});

// Function for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Variables for image slide
let sliderImages = document.querySelectorAll('.slide');
let buttons = document.querySelector('.buttons');
let allButtons = document.querySelectorAll('.buttons > a');
let current = 0;

// Clear all images
function reset () {
  // For mobile
  if (window.innerWidth < 900) {
    for (let i = 0; i < sliderImages.length; i++) {
      allButtons[i].classList.remove('active-button');
      sliderImages[i].classList.remove('active-image');
    }
  }
  // For desktop
  else if (window.innerWidth >= 900) {
    for (let i = 0; i < sliderImages.length; i++) {
      allButtons[i].classList.remove('active-button');
    }
  }
}

// Show first image after reload
function startSlide () {
  // For mobile
  if (window.innerWidth < 900) {
    reset();
    allButtons[0].classList.add('active-button');
    sliderImages[0].classList.add('active-image');
    current = 0;
  }
  // For desktop
  else if (window.innerWidth >= 900) {
    reset();
    allButtons[0].classList.add('active-button');
  }
}

// Show first image after click
allButtons[0].addEventListener('click', () => {
  // For mobile
  if (window.innerWidth < 900) {
    if (current !== 0) {
      reset();
      allButtons[0].classList.add('active-button');
      sliderImages[0].classList.add('active-image');
      current = 0;
    }
  }
  // For desktop
  else if (window.innerWidth >= 900) {
    reset();
    allButtons[0].classList.add('active-button');
  }
});

// Show second image after click
allButtons[1].addEventListener('click', () => {
  // For mobile
  if (window.innerWidth < 900) {
    if (current !== 1) {
      reset();
      allButtons[1].classList.add('active-button');
      sliderImages[1].classList.add('active-image');
      current = 1;
    }
  }
  // For desktop
  else if (window.innerWidth >= 900) {
    reset();
    allButtons[1].classList.add('active-button');
  }
});


// Show third image after click
allButtons[2].addEventListener('click', () => {
  // For mobile
  if (window.innerWidth < 900) {
    if (current !== 2) {
      reset();
      allButtons[2].classList.add('active-button');
      sliderImages[2].classList.add('active-image');
      current = 2;
    }
  }
  // For desktop
  else if (window.innerWidth >= 900) {
    reset();
    allButtons[2].classList.add('active-button');
  }
});


startSlide();
