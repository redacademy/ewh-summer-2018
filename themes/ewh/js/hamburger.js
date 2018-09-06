(function($) {
  $('.nav-screen').hide();
  $('.exit-nav').hide();
  $('menu-navigation-menu-container').hide();

  $('.hamburger').on('click', function() {
    $('.exit-nav').show();
    $('menu-navigation-menu-container').show();

  }); 

  $('.exit-nav').on('click', function() {
    $('.exit-nav').hide();
    $('menu-navigation-menu-container').hide();


  });


})(jQuery);
