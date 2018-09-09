(function($) {
  // var href = $('.meun-item a').attr('href');
  // if(href === '#'){
  //   $('.meun-item a').append('');
  // }else{
  //   $('.meun-item a').append('<i class="fas fa-angle-up"></i>');
  // }

  // Hamburger Icon
  $('.hamburger').on('click', function() {
    $('.site-header').toggleClass('nav-site-header');
    $('.menu-item').toggleClass('active-menu-item');
  });

  // X Icon
  $('.exit-nav').on('click', function() {
    $('.site-header').toggleClass('nav-site-header');
  });

  $('.menu-item a').on('click', function() {
    var clicked = $(this);
    var href = clicked.attr('href');

    if (href === '#') {

      // $('.sub-menu').removeClass('active');
      // $('.menu-item').removeClass('drop-down');
      clicked.next('.sub-menu').addClass('active');
      clicked.parent().addClass('drop-down');

    }
     if (clicked.html() === 'Abortion') {
      clicked.next('.sub-menu').addClass('active');
      clicked.parent().addClass('drop-down');
      clicked.next('.sub-menu').addClass('top-side-drop-down');
      clicked.parent().css('background-color', '#0076B6');
      clicked.css('color', '#fff');
    } 

    if (clicked.html() === 'Dedications') {
      clicked.parent().css('background-color', '#0076B6');
      clicked.css('color', '#fff');
      clicked.next('.sub-menu').addClass('side-drop-down');
    }
     
  });
})(jQuery);
