(function($) {
  $('.nav-screen').hide();

  $('.hamburger').on('click', function() {
    $('.nav-screen').show();
    $('.nav-screen').animate(
      { height: '100%', width: '100%' },
      500,
      function() {
        // $('.menu-navigation-menu-container').css('display', 'block');
        $('#page').hide();
      }
    );
  });

  $('.exit-nav').on('click', function() {
    $('#page').show();
    // $('.menu-navigation-menu-container').css('display', 'none');
    $('.nav-screen').animate({ height: '0', width: '0' }, 500, function() {
      $('.nav-screen').hide();
      $('.home').animate({ height: '100%', width: '100%' }, 500);
    });
  });
})(jQuery);
