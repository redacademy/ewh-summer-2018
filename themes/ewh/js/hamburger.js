(function($) {
  $('.nav-screen').hide();

  $('.hamburger').on('click', function() {
    $('.nav-screen').show();
<<<<<<< HEAD
    $('.nav-screen').animate(
      { height: '100%', width: '100%' },
      500,
      function() {
        $('#page').hide();
      }
    );
  }); 
=======
  });
>>>>>>> db66bcd8b4170971e2fff3cc9c6808bc65e40c19

  $('.exit-nav').on('click', function() {
    $('#page').show();
      $('.nav-screen').hide();
  });


})(jQuery);
