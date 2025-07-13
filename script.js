
// Preloader typing + hide after 3 seconds
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const typingWelcome = document.querySelector(".typing-welcome");
  
    // Typing "Welcome"
    let text = "Welcome";
    let index = 0;
    function type() {
      if (index < text.length) {
        typingWelcome.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150);
      }
    }
    type();
  
    // Hide preloader after 3 seconds
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.pointerEvents = "none";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500); // allow fade out
    }, 2000);
  });
  
// Smooth scroll
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Typing effect
  var typed = new Typed('.typing', {
    strings: ["Front-End Developer", "UI/UX Enthusiast", "CS Student"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
  
  // Counters
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    counter.innerText = '0';
    const update = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100;
  
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 30);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
  
  // AOS init
  AOS.init({ duration: 1000 });
  