// Navbar Toggle
burgerMenu = document.querySelector('.burger-menu')
menuResponsive = document.querySelector('.menu-responsive')
links = document.querySelectorAll('.link')

const toggleNavbar = () => {
  burgerMenu.classList.toggle('active')
  menuResponsive.classList.toggle('active')
}

const removeNavbar = () => {
  burgerMenu.classList.remove('active')
  menuResponsive.classList.remove('active')
}

burgerMenu.addEventListener('click', toggleNavbar)
links.forEach((link) => {
  link.addEventListener('click', removeNavbar)
})

const navLogo = document.querySelector('.nav-logo')

navLogo.addEventListener('click', removeNavbar)

// GSAP Hero Animation
// document.addEventListener('DOMContentLoaded', (event) => {
//   var tl = gsap.timeline();

//   tl.to('.loading-anim1', { duration: 1, opacity: 0 })
//     .to('.loading-anim2', { duration: 0.5, opacity: 1 })
//     .to('.loading-anim2', { duration: 0.5, opacity: 0 })
//     .to('.loading-screen', { duration: 1, scaleY: 0 })
//     .from('.header-anim1', { duration: 1, opacity: 0 })
//     .from('.header-anim2-overlay', { duration: 2, scaleY: 1 }, '-=1')
//     .from('.header-anim3', { duration: 1, opacity: 0 }, '-=2')
//     .from('.header-anim4', { duration: 1, opacity: 0 }, '-=2')
//     .from('.header-anim5', { duration: 2, opacity: 0 }, '-=2');

//   const html = document.querySelector('html');

//   setTimeout(() => {
//     html.style.overflow = 'auto';
//   }, 2000);
// });

// // Basic Fade In
// const fadeIn = document.querySelectorAll('.fade-in');

// fadeIn.forEach((fade) => {
//   gsap.from(fade, {
//     scrollTrigger: {
//       trigger: fade,
//       start: 'bottom bottom', // when the Bottom of the trigger hits the Bottom of the viewport
//     },
//     duration: 1.5,
//     // ease: 'power4.out',
//     y: 30,
//     opacity: '0',
//   });
// });

// // Skills Animation

// let skillsTimeline = gsap.timeline({
//   // yes, we can add it to an entire timeline!
//   scrollTrigger: {
//     trigger: '.skills-section',
//     // pin: true, // pin the trigger element while active
//     start: 'top center', // when the top of the trigger hits the top of the viewport
//   },
// });

// // add animations and labels to the timeline
// skillsTimeline
//   .from('.skill-anim1', { duration: 0.3, scale: 0 })
//   .from('.skill-anim2', { duration: 0.3, scale: 0 }, '-=.1')
//   .from('.skill-anim3', { duration: 0.3, scale: 0 }, '-=.1')
//   .from('.skill-anim4', { duration: 0.3, scale: 0 }, '-=.1')
//   .from('.skill-anim5', { duration: 0.3, scale: 0 }, '-=.1')
//   .from('.skill-anim6', { duration: 0.3, scale: 0 }, '-=.1')
//   .from('.skill-anim7', { duration: 0.3, scale: 0 }, '-=.1')
//   .from('.skill-anim8', { duration: 0.3, scale: 0 }, '-=.1')
//   .from('.skill-anim9', { duration: 0.3, scale: 0 }, '-=.1')
//   .from('.skill-anim10', { duration: 0.3, scale: 0 }, '-=.1')
//   .from('.skill-anim11', { duration: 0.3, scale: 0 }, '-=.1')
//   .from('.skill-anim12', { duration: 0.3, scale: 0 }, '-=.1')
//   .from('.skill-anim13', { duration: 0.3, scale: 0 }, '-=.1')
//   .from('.skill-anim14', { duration: 0.3, scale: 0 }, '-=.1');

// // Toggle Nav Variant
const nav = document.querySelector('nav')

const navDark = () => {
  nav.classList.add('nav-dark')
}

const navLight = () => {
  nav.classList.remove('nav-dark')
}

// // Hero Trigger
ScrollTrigger.create({
  // markers: true,
  trigger: '.hero',
  start: 'top bottom',
  endTrigger: '.hero',
  end: 'bottom top',
  onEnter: () => navLight(),
  onLeave: () => navDark(),
  onEnterBack: () => navLight(),
})

// // Skills Trigger
// ScrollTrigger.create({
//   // markers: true,
//   trigger: '.skills-section',
//   start: 'center bottom',
//   endTrigger: '.skills-section',
//   end: 'top center',
//   onEnter: () => bgBlack(),
//   onLeave: () => bgWhite(),
//   onEnterBack: () => bgBlack(),
// });

// Footer Year
const year = document.querySelector('.year')

const date = new Date()
const currentYear = date.getFullYear()

year.innerHTML = currentYear
