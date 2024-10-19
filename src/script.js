window.addEventListener('load', function () {
  document.getElementById('preloader').style.display = 'none';
});

const menu = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');
const menuItem = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');

const contact = document.getElementById('contact')

$(window).on('load', function() {

  const svg = document.getElementById("preloaderSvg");
  const tl = gsap.timeline();
  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
      delay: 4,
      y: -100,
      opacity: 0,
  });
  tl.to(svg, {
      duration: 0.5,
      attr: { d: curve },
      ease: "power2.easeIn",
  }).to(svg, {
      duration: 0.5,
      attr: { d: flat },
      ease: "power2.easeOut",
  });
  tl.to(".preloader", {
      y: -1500,
  });
  tl.to(".preloader", {
      zIndex: -1,
      display: "none",
  });



});

menu.addEventListener('click', () => {
  menu.classList.toggle('openHam');
  sidebar.classList.toggle('close')
})

menuItem.forEach(items => {
  items.addEventListener('click', () => {
    menu.classList.toggle('openHam');
    sidebar.classList.toggle('close')
  })
})

window.addEventListener('scroll', () => {
  if (this.scrollY >= 45) {
    header.classList.add('border-b-2', 'border-white')
  } else {
    header.classList.remove('border-b-2', 'border-white')
  }


})

$(document).ready(function () {
  $('.testimonial-carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  });
});

$(document).ready(function () {
  var textArray = ["(WHAT THEY SAY ABOUT ME)", "THE VALUE PEOPLE PLACE ON MY SERVICES"];
  var arrayIndex = 0;  // To keep track of the current phrase
  var charIndex = 0;   // To keep track of the current character in the phrase
  var speed = 100;     // Typing speed in milliseconds
  var delay = 20000;    // Delay after completing typing before erasing

  function typeWriter() {
    if (charIndex < textArray[arrayIndex].length) {
      $('#typewriter').append(textArray[arrayIndex].charAt(charIndex));
      charIndex++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(eraseText, delay);  // Wait before erasing
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      charIndex--;
      $('#typewriter').html(textArray[arrayIndex].substring(0, charIndex));
      setTimeout(eraseText, speed);
    } else {
      // Move to the next phrase in the array
      arrayIndex = (arrayIndex + 1) % textArray.length;  // Loop through phrases
      setTimeout(typeWriter, delay);  // Start typing the next phrase
    }
  }

  typeWriter();  // Start the typing effect
});


window.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,

  });
});

// Add an event listener to handle form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Use FormData to send the form data via AJAX
  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // Show success message
      alert('Message sent successfully!');

      // Clear form fields
      form.reset();
    } else {
      // Show error message
      alert('Oops! There was a problem submitting your form');
    }
  }).catch(error => {
    // Handle network errors
    alert('Network error. Please try again later.');
  });
});






