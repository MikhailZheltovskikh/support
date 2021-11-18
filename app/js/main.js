$('.questions__slider').slick({
   nextArrow: '<button class="slick-next slick-next"><img src="images/next.svg" alt="next arrow"></button>',
   slidesToShow: 4,
   slidesToScroll: 1,
   arrows: true,
   responsive: [
      {
         breakpoint: 1100,
         settings: {
            slidesToShow: 3,

         }
      },
      {
         breakpoint: 800,
         settings: {
            slidesToShow: 2,

         }
      },
      {
         breakpoint: 570,
         settings: {
            slidesToShow: 1,
         }
      },

   ]


});

$('.reference__item').on('click', function () {
   if ($(this).hasClass('reference__item--active')) {
      $(this).removeClass('reference__item--active');
   }
   else {
      $(this).addClass('reference__item--active');
   }

});