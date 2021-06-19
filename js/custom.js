$(function(){

//fixed backgorund goes here
$(window).scroll(function(){
var scrolling = $(this).scrollTop();
if (scrolling > 200){
$('.navbar').addClass('bg');
}
else{
  $('.navbar').removeClass('bg');
}


});

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 400
});

$(document).ready(function(){
  $('body,html').animate({
      scrollTop: 0
  }, 800);
$('.backtotop').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 800);
  return false;
});
}); 

$('.side-click').click(function(){
$('.sidebar').toggleClass('sideopen');
$('.side-click').toggleClass('slide-click2');
$('.side-click').toggleClass('fa-bars');
});




    // banner slider
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        fade:true,
        speed:1500,
        prevArrow:'.left',
        nextArrow:'.right',
        autoplaySpeed: 1500,
      });
    $('.porti-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        speed:1500,
        autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
          
            }
          },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
          
            }
          },
        {
            breakpoint: 993,
            settings: {
              slidesToShow: 3,
          
            }
          },
        ]
      });
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        speed:1500,
        autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 465,
            settings: {
              slidesToShow: 1,
          
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
          
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
          
            }
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 3,
          
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
          
            }
          },
        ]
      });


    $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows:true,
        speed:1500,
        vertical:true,
        autoplaySpeed: 1500,
        centerMode:true,
        centerPadding:0,    
        prevArrow:'.up',
        nextArrow:'.down',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
          
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
          
            }
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 1,
          
            }
          },
        ]
      });


    $('.logo-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        speed:1500,
        autoplaySpeed: 1500,
        centerMode:true,
        centerPadding:0,  
        responsive: [
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
          
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
          
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
          
            }
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 4,
          
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
          
            }
          },
        ]  
      });
    
      $('.venobox').venobox(); 
    
      $('.profile-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
       autoplay:true,
        asNavFor: '.profile-main',
      });

      $('.profile-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:true,
        arrows: true,
        autoplay:true,
        asNavFor: '.profile-text-slider',
        centerMode: true,
        centerPadding:true,
        prevArrow:'.up2',
        nextArrow:'.down2',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
          
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
          
            }
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 1,
          
            }
          },
        ]
      });
    });