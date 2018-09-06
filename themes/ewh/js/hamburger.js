(function($) {
  $('.nav-screen').hide();

  $('.hamburger').on('click', function() {
    $('.nav-screen').show();
  });

  $('.exit-nav').on('click', function() {
    $('#page').show();
      $('.nav-screen').hide();
  });


})(jQuery);
