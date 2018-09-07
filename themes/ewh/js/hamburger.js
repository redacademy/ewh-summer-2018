(function($) {
  $('.exit-nav').hide();

  $('.hamburger').on('click', function() {
    $('.exit-nav').show();
    $('.hamburger').hide();
    $('.site-header').toggleClass('nav-site-header');
    $('.menu-navigation-menu-container').toggleClass('.menu-navigation-menu-container1');
    $('.span-home-logo').toggleClass('nav-span-home-logo');
    $('.main-navigation').toggleClass('nav-main-navigation');
    $('.span-chinese-nav').hide();
    $('.menu-navigation-menu-container').show();

    
  }); 

  $('.exit-nav').on('click', function() {
    $('.site-header').toggleClass('nav-site-header');
    $('.menu-navigation-menu-container').toggleClass('.menu-navigation-menu-container1');
    $('.span-home-logo').toggleClass('nav-span-home-logo');
    $('.main-navigation').toggleClass('nav-main-navigation');
    $('.exit-nav').hide();
    $('.hamburger').show();
    $('.span-chinese-nav').show();
    $('.menu-navigation-menu-container').hide();


  });

  $('.menu-item-61').on('click', function(){
$('.menu-item-61').animate({height: '200px'});
  });


})(jQuery);
