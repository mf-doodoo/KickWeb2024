document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.eck1, .eck2, .eck3, .eck4, .eck5, .eck6, .eck7, .eck8, .eck9');

  // Umkehren der Elementreihenfolge
  var reversedElements = Array.prototype.slice.call(elements).reverse();
  let animateHeight = 1000;
  function fadeInElements() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    //console.log('scrollpos'+scrollPosition) ;
    reversedElements.forEach(
      function (element, index) {


        let anzahlEl = reversedElements.length;
        if (scrollPosition > animateHeight / anzahlEl * (index + 1)) {

          element.classList.add('vis');

        }

        if (scrollPosition > animateHeight) {
          let el = document.getElementsByClassName('container-SVG')[0];
          el.style.opacity = 0.5;
        }
        else {
          let el = document.getElementsByClassName('container-SVG')[0];
          el.style.opacity = 1;
        }

        console.log('scrollpos' + scrollPosition);

        if (scrollPosition > 2300) {
          let el = document.getElementsByClassName('container-SVG')[0];
          el.style.opacity = 1;
        }
      }
    );
  };

  window.addEventListener('scroll', fadeInElements);
});