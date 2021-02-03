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
    autoplay: true,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'linear',
    
  });

});