import AOS from 'aos';
import 'aos/dist/aos.css';

// initialize AOS animation 
AOS.init({
    duration: 1000,
    offset: 100,
});

// Get the image element
const menuToggle = document.getElementById('menuToggle');

// Get the menu element
const headerMenuMobile = document.querySelector('.headerMenuMobile');

// Add click event listener to the image element
menuToggle.addEventListener('click', () => {
   
    // console.log('Click event triggered');
    headerMenuMobile.classList.toggle('visible');
    menuToggle.setAttribute('aria-expanded', true);
});


