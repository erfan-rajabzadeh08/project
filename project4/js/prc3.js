$(document).ready(function() {
let scrolls=$(".a-scroll")
let nav=$(".navs")
scrolls.hide();
  $(window).scroll(function(){
    if($(this).scrollTop() >= 150) {
      nav.addClass('fixed');
      scrolls.fadeIn(500);
    } else {
      nav.removeClass('fixed');
      scrolls.fadeOut(500);
    }
  })
$(".input-drag").click(function (event) {
  event.stopPropagation();
  $('.input-drag i').toggleClass('rotated')
  $(".section-card").stop().fadeOut(500);
$(this).next(".section-card").stop().fadeToggle(500);
});
$(".section-card li").click(function () {
  let x = $(this).text();
$(this).parents(".section-card").hide();
$(this).parents(".Date").find(".input-drag p").text(x);
});
$(window).click(function (e) {
  $(".section-card").hide()
  $('.input-drag i').removeClass('rotated')

});

  $('.owl-demo').owlCarousel({

      navigation : false,
loop:true,
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 1,
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false

  });
$(".search1").click(function(){
$(".input-text .search-icon1").toggle(function(){
  $(".input-text .search-icon1").css('opacity', '1');
  $(".input-text").css('transform', 'translateY(20px) ');
});

});

 $(".scroll-slider").click(function(){
  $('html, body').animate({
     scrollTop: $(".backgrounds").offset().top
  }, 100);
});

$('.tabs').first().show();
$('.list-tab a').on('click', function(e) {
  e.preventDefault();
  let targetTab = $(this).attr('href');
  $('.tabs').hide();
  $(targetTab).show(this);

  })
});
$('.list-tab a').on('click', function(e) {
  e.preventDefault();
  $('.list-tab a').removeClass('actives');
  $(this).addClass('actives')

});


$("#owl-demo").owlCarousel({
  goToFirst:true,
  navigation:false,
  pagination:true,
  center: true,
  loop: true,
  dots: true,
  dotsEach: 1,
  items :3,
    responsive:{
      0:{
          items:1

      },
      600:{
          items:2

      },
      1000:{
          items:3,

      }
  }
});


$(".slider5").owlCarousel({
  goToFirst:true,
  margin:25,
  navigation:false,
  pagination:false,
  center: false,
  loop: true,
  dots: true,
  dotsEach: 1,
  items :3,
  responsive:{
    0:{
        items:1

    },
    800:{
        items:2

    },
    1200:{
        items:3,

    }
}
});




