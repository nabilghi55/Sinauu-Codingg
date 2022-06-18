const txtElement = ['JAVA','HTML','CSS','DLL']
let count = 0;
let txtIndex = 0;
let curentTxt = '';
let words = '';

(function ngetik(){
   if(count==txtElement.length){
      count=0;
   }
   curentTxt = txtElement[count];

   words = curentTxt.slice(0,++txtIndex);
   document.querySelector('.efekngetik').textContent=words;
   if(words.length == curentTxt.length){
      count++;
      txtIndex = 0;
   }
   setTimeout(ngetik, 400);
   new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });
  
})();

 