$(function(){
  $(".reserve-button").click(function(){
    $(".modal").fadeIn();
  });
  $(".close").click(function(){
    $(".modal").fadeOut();
  });
  $(".modal_bg").click(function(){
    $(".modal").fadeOut();
  });



  // スライダースリック
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});