////////// Menu Toggle ////////
function customWSMenu(x) {
  x.classList.toggle("is-active");
  $(".custom-nav").toggleClass("active");
}
//////// On Scroll Animation ////////
$(document).ready(function(){
  wow = new WOW({
    animateClass: 'animate__animated',
    offset: 120
  });
  wow.init();

  $(window).scroll(function(){
    var sticky = $('.page__header'),
        scroll = $(window).scrollTop();
    if (scroll >= 150) sticky.addClass('active');
    else sticky.removeClass('active');
  });
  if($(window).scrollTop() >= 200){
    $('.page__header').addClass("active");
  }

});
