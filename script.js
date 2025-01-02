
//it design About section: Experience,education,hobbies part ...whenever click to experience part then will show the experience content and education and hobbies part will be hide
//this is the function which i used----->opentab() func used 
var tablinks=document.getElementsByClassName("tab-links");
var tabContents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
   for(tablink of tablinks){
    tablink.classList.remove("active-links");
   }
   for(tabcontent of tabContents){
    tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-links");
   document.getElementById(tabname).classList.add("active-tab");
}


// change the heading infinite way like frontend develooper and backend developer and full stack developer.....
//....used home section---->content section---->h3 tag id=developerType
const developerRoles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
let roleIndex = 0; 
let charIndex = 0;  
const developerTypeElement = document.getElementById("developerType");

function typeWriter() {
  const currentRole = developerRoles[roleIndex];
  developerTypeElement.textContent = currentRole.substring(0, charIndex + 1);
  // currentRole.substring(0, charIndex + 1)-->which means first char=0 then show 'F' charIndex + 1=0+1=1 then show'fr' and show on....
  charIndex++;
  if (charIndex > currentRole.length) { //18>18 true charindex=0 now roleindex=1 1%3=gives 1 move to backend developer
    charIndex = 0;
    roleIndex = (roleIndex + 1) % developerRoles.length; 
  }
}
setInterval(typeWriter, 160);



function showContent() {
  const description = document.querySelector('.description');
  description.style.opacity = 1; // Make the content visible gradually
}
setTimeout(showContent,0.75000); 


function showContent2() {
  const description1 = document.querySelector('.description1');
  description1.style.opacity = 1; // Make the content visible gradually
}
setTimeout(showContent2,0.7500);



//For ScrollReveal methods
// Initialize ScrollReveal with desired options
ScrollReveal().reveal('.home', {
  origin: 'left',       // You can change direction (left, right, top, bottom)
  distance: '100px',    // Distance the element travels on reveal
  duration: 5000,       // Duration of the animation
  delay: 2000,           // Delay before the animation starts
  opacity: 0,           // The initial opacity of the element
  scale: 0.40          // The initial scale of the element (smaller at start)
});

ScrollReveal().reveal('.about', {
  origin: 'right',
  distance: '100px',
  duration: 5000,
  delay: 2000,
  opacity: 0,
  scale: 0.40
});

ScrollReveal().reveal('.skill', {
  origin: 'top',
  distance: '100px',
  duration: 1000,
  delay: 1000,
  opacity: 0,
  scale: 0.40
});


ScrollReveal().reveal('.contact', {
  origin: 'right',
  distance: '100px',
  duration: 1000,
  delay: 100,
  opacity: 0,

  scale: 0.85
});

// Define ScrollReveal configurations
const revealSettings = {
  duration: 1000,    // Animation duration
  opacity: 0,        // Starting opacity (invisible)
  scale: 0.85,       // Initial scale (zoomed out)
};

// Function to handle responsive ScrollReveal
function applyScrollReveal() {
  const screenWidth = window.innerWidth;

  // Reset ScrollReveal after page load or resize
  ScrollReveal().clean('.home, .about, .skill, .project, .contact');

  // General Settings (Common for all screens)
  const commonSettings = {
      distance: '100px', // Default distance
      duration: revealSettings.duration,
      opacity: revealSettings.opacity,
      scale: revealSettings.scale,
  };

  // Custom settings based on screen size
  if (screenWidth < 768) { // Mobile (Phones)
      // Smaller animations for mobile
      ScrollReveal().reveal('.home', { ...commonSettings, origin: 'top' });
      ScrollReveal().reveal('.about', { ...commonSettings, origin: 'top' });
      ScrollReveal().reveal('.skill', { ...commonSettings, origin: 'top' });
      ScrollReveal().reveal('.project', { ...commonSettings, origin: 'bottom' });
      ScrollReveal().reveal('.contact', { ...commonSettings, origin: 'top' });
  } else if (screenWidth < 1024) { // Tablet
      // Slightly bigger animations for tablet
      ScrollReveal().reveal('.home', { ...commonSettings, origin: 'left' });
      ScrollReveal().reveal('.about', { ...commonSettings, origin: 'right' });
      ScrollReveal().reveal('.skill', { ...commonSettings, origin: 'top' });
      ScrollReveal().reveal('.project', { ...commonSettings, origin: 'bottom' });
      ScrollReveal().reveal('.contact', { ...commonSettings, origin: 'left' });
  } else { // Desktop and larger screens
      // Larger animations for desktops
      ScrollReveal().reveal('.home', { ...commonSettings, origin: 'left' });
      ScrollReveal().reveal('.about', { ...commonSettings, origin: 'right' });
      ScrollReveal().reveal('.skill', { ...commonSettings, origin: 'top' });
      ScrollReveal().reveal('.project', { ...commonSettings, origin: 'bottom' });
      ScrollReveal().reveal('.contact', { ...commonSettings, origin: 'left' });
  }
}

// Initialize ScrollReveal
applyScrollReveal();

// Reapply ScrollReveal on window resize
window.addEventListener('resize', function() {
  applyScrollReveal();
});
