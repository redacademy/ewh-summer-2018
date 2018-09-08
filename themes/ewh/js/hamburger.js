(function($) {

  // Hamburger Icon
  $('.hamburger').on('click', function() {

    $('.site-header').toggleClass('nav-site-header');
    $('menu-navigation-menu-container').toggleClass('hamburger-menu');

  });

  // X Icon
  $('.exit-nav').on('click', function() {

    $('.site-header').toggleClass('nav-site-header');

  });

  $('.menu-item a').on('click', function(){
    var clicked = $(this);
    var href = clicked.attr('href');


    if(href === '#'){
      clicked.parent('.menu-item').toggleClass('active-menu-item');
      clicked.next('.sub-menu').toggleClass('active');
    } else {
      return true;
    }

    });
    $( '.menu-item a' ).mouseover(function() {
      var clicked = $(this);
        (clicked.parent('.menu-item').toggleClass('active-menu-item') && clicked.next('.sub-menu').toggleClass('active'));
      });

  $( '.menu-item ul').mouseout(function(){
    var clicked = $(this);
    (clicked.parent('.menu-item').toggleClass('active-menu-item') && clicked.next('.sub-menu').toggleClass('active'));
  });

})(jQuery);
