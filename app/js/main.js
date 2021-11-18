$('.questions__slider').slick({
   nextArrow: '<button class="slick-next slick-next"><img src="images/next.svg" alt="next arrow"></button>', 
   slidesToShow: 4,
   slidesToScroll: 1,  
   focusOnSelect: true,    
   arrows: true,
   // responsive: [
   //     {
   //       breakpoint: 960,
   //       settings: {
   //       slidesToShow: 5,
 
   //       }
   //     },
   //     {
   //       breakpoint: 750,
   //       settings: {
   //       slidesToShow: 4,
 
   //       }
   //     },
   //     {
   //       breakpoint: 650,
   //       settings: {
   //       slidesToShow: 3,
   //       }
   //     },
       
   // ]  
 
 
 });

$('.reference__item').on('click', function(){
   if($(this).hasClass('reference__item--active')){
      $(this).removeClass('reference__item--active');
   }
   else{$(this).addClass('reference__item--active');
   }
   
 });