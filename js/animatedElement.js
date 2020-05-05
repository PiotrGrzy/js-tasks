// Stwórz klasę css .fadeIn, która będzie zawierać animację pojawiania się (opacity z 0 na 1) elementu w czasie 1 sekundy

// Stwórz funkcję w js animatedElement, która:
// - do każdego elementu z klasą .animate-this doda klasę .fadeIn
// klasa .fadeIn ma być dodana po 200ms od pojawianie się elementu z klasą .animate-this na ekranie
// funkcja animatedElement powinna być wywołana wraz z załądowaniem się pliku ze skryptem

// google keywords - intersection observer, css animation

function animatedElement() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn');
      }
    });
  }, {});

  document.querySelectorAll('.animate-this').forEach((target) => {
    observer.observe(target);
  });
}

animatedElement();
