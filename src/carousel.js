$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
      items: 3,
      margin: 40,
      autoWidth: true,
      nav: true,
      dots: false,
      loop: true,
      responsive: {
         0: {
            items: 1,
            autoWidth: false
         },
         576: {
            items: 2,
            margin: 30
         },
         768: {
            items: 3,
            margin: 40
         }
      }
   });
});