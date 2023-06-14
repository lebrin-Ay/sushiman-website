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
// menuToggle.addEventListener('click', function () {
menuToggle.addEventListener('click', () => {
   
    // console.log('Click event triggered');
    headerMenuMobile.classList.toggle('visible');
    menuToggle.setAttribute('aria-expanded', true);

    
    // const isVisible = headerMenuMobile.getAttribute('data-visible') === 'true';

    // if (isVisible) {
    //   headerMenuMobile.setAttribute('data-visible', 'false');
    // } else {
    //   headerMenuMobile.setAttribute('data-visible', 'true');
    // }
});
//     const visibility = headerMenuMobile.getAttribute("data-visible");
    
//     if (visibility === "false") {
//         headerMenuMobile.setAttribute('data-visible', 'true');
//     }
//     else {
//         headerMenuMobile.setAttribute('data-visible', 'false');
//     }
// });
//   // Toggle the visibility of the menu by modifying the display property
//   if (menu.style.display === 'block') {
//     menu.style.display = 'none';
//   } else {
//     menu.style.display = 'block';
//   }
// });

