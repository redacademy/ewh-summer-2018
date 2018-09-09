(function($) {
$('.sub-menu').slideUp();


  // var href = $('.meun-item a').attr('href');
  // if(href === '#'){
  //   $('.meun-item a').append('');
  // }else{
  //   $('.meun-item a').append('<i class="fas fa-angle-up"></i>');
  // }


  // Hamburger Icon
  $('.hamburger').on('click', function() {
    $('.site-header').toggleClass('nav-site-header');
    // $('.sub-menu').toggleClass('active');

  });

  // X Icon
  $('.exit-nav').on('click', function() {
    $('.site-header').toggleClass('nav-site-header');
  });

  // Click on Nav
  $('.menu-item a').on('click', function() {
    var clicked = $(this);


    if (clicked.html() === 'Services') {
      clicked.parent().toggleClass('active-menu-item');
      clicked.next('.sub-menu').toggleClass('active');

      clicked.next('.sub-menu').slideDown(500, function(){

      });
    }
    if (clicked.html() === 'About Us') {
      clicked.parent().toggleClass('active-menu-item');
      clicked.next('.sub-menu').toggleClass('active');

      clicked.next('.sub-menu').slideDown(500, function(){

      });
    }
    if (clicked.html() === 'Resources') {
      clicked.parent().toggleClass('active-menu-item');
      clicked.next('.sub-menu').toggleClass('active');

      clicked.next('.sub-menu').slideDown(500, function(){

      });
    }

     if (clicked.html() === 'Abortion') {
      clicked.next('.sub-menu').toggleClass('top-side-drop-down');
      clicked.parent().css('background-color', '#0076B6');
      clicked.css('color', '#fff');
    } 

    if (clicked.html() === 'Dedications') {
      clicked.next('.sub-menu').toggleClass('side-drop-down');
      clicked.parent().css('background-color', '#0076B6');
      clicked.css('color', '#fff');
    }
     
  });
})(jQuery);
