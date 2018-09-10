(function($) {
  $('.sub-menu').slideUp();

  // if ($('.menu-item a').html() === 'Services') {
  //   var clicked = $(this);
  //   console.log('hi');
  //   clicked.html('<i class="fas fa-angle-up"></i>');
  // }

  // var href = $('.meun-item a').attr('href');
  // if(href === '#'){
  //   $('.meun-item a').append('');
  // }else{
  //   $('.meun-item a').append('<i class="fas fa-angle-up"></i>');
  // }

  // Hamburger Icon
  $('.hamburger').on('click', function() {
    $('.site-header').toggleClass('nav-site-header');
  });

  // X Icon
  $('.exit-nav').on('click', function() {
    $('.site-header').toggleClass('nav-site-header');
  });

  // Click on Nav
  $('.menu-item a').on('click', function() {
    var clicked = $(this);

    // Click on Services
    if (clicked.html() === 'Services') {
      // Dedication Drop Down Slide Left
      $('.side-drop-down').animate({ width: '0px' }, 500, function() {
        $('.menu-item').removeClass('blue');
        $('.side-drop-down').slideUp(function() {
          $('.sub-menu').removeClass('side-drop-down');
        });
      });
      // Other Active Menu Slide Up
      setTimeout(function() {
        $('.active').slideUp(200, function() {
          $('.sub-menu').removeClass('active');
        });
      }, 250);
      // Active Menu  Slide Down
      clicked.next('.sub-menu').animate({ width: '200px' }, 0, function() {
        clicked.next('.sub-menu').slideDown(500, function() {
          clicked.next('.sub-menu').addClass('active');
        });
      });
    }

    // Click on About Us
    if (clicked.html() === 'About Us') {
      // Abortion Drop Down Slide Left
      $('.top-side-drop-down').animate({ width: '0px' }, 500, function() {
        $('.menu-item').removeClass('blue');
        $('.top-side-drop-down').slideUp(function() {
          $('.sub-menu').removeClass('top-side-drop-down');
        });
      });

      // Other Active Menu Slide Up
      setTimeout(function() {
        $('.active').slideUp(200, function() {
          $('.sub-menu').removeClass('active');
        });
      }, 250);

      // Active Menu Slide Down
      clicked.next('.sub-menu').animate({ width: '200px' }, 0, function() {
        clicked.next('.sub-menu').slideDown(500, function() {
          clicked.next('.sub-menu').addClass('active');
        });
      });
    }
    // Click on Resources
    if (clicked.html() === 'Resources') {
      // Abortion Drop Down Slide Left
      $('.top-side-drop-down').animate({ width: '0px' }, 500, function() {
        $('.menu-item').removeClass('blue');
        $('.top-side-drop-down').slideUp(function() {
          $('.sub-menu').removeClass('top-side-drop-down');
        });
      });

      // Dedication Drop Down Slide Left
      $('.side-drop-down').animate({ width: '0px' }, 500, function() {
        $('.menu-item').removeClass('blue');
        $('.side-drop-down').slideUp(function() {
          $('.sub-menu').removeClass('side-drop-down');
        });
      });

      // Other Active Menu Slide Up
      setTimeout(function() {
        $('.active').slideUp(200, function() {
          $('.sub-menu').removeClass('active');
        });
      }, 250);

      //  Active Menu Slide Down
      clicked.next('.sub-menu').animate({ width: '200px' }, 0, function() {
        clicked.next('.sub-menu').slideDown(500, function() {
          clicked.next('.sub-menu').addClass('active');
        });
      });
    }

    // Click on Abortion
    if (clicked.html() === 'Abortion') {
      // Style Drop Down Menu
      clicked.next('.sub-menu').addClass('top-side-drop-down');
      clicked.parent().addClass('blue');

      // Abortion Drop Down Slide Right
      $('.top-side-drop-down').slideDown(0, function() {
        $('.top-side-drop-down').animate({ width: '200px' }, 300);
      });
    }

    // Click on Dedications
    if (clicked.html() === 'Dedications') {
      // Style Drop Down Menu
      clicked.next('.sub-menu').addClass('side-drop-down');
      clicked.parent().addClass('blue');

      // Dedication Drop Down Slide Right
      $('.side-drop-down').slideDown(0, function() {
        $('.side-drop-down').animate({ width: '220px' }, 300);
      });
    }
  });
})(jQuery);