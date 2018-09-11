(function($) {
  $('.sub-menu').slideUp();
  function reset() {
    $('.site-header').toggleClass('nav-site-header');
    //  Dedication Drop Down Slide Left
    $('.side-drop-down').animate({ width: '0px' }, 0);
    $('.top-side-drop-down').animate({ width: '0px' }, 0);
    $('.menu-item').removeClass('blue');
    // Other Active Menu Slide Up
    $('.side-drop-down').slideUp(0);
    $('.top-side-drop-down').slideUp(0);
    $('.sub-menu').slideUp(0);
    $('.sub-menu').removeClass(
      'side-drop-down top-side-drop-down active active2');
    $('.menu-item').removeClass('angle-icon');
  }
  // Hamburger Icon
  $('.hamburger').on('click', function() {
    reset();
    $('.sub-menu').animate({ width: '100%' }, 0);
  });
  // X Icon
  $('.exit-nav').on('click', function() {
    reset();
    $('.sub-menu').animate({ width: '0' }, 0);
    $('.menu-item').animate({ height: '30px' }, 0);
  });
  // Click on Nav
  $('.menu-item a').on('click', function() {
    var clicked = $(this);
    // Active Header
    if ($('#masthead').hasClass('nav-site-header')) {
      if (clicked.html() === 'Abortion') {
        clicked.parent().animate({ height: '100%' }, 0, function() {
          clicked.next('.sub-menu').slideDown(500, function() {
            clicked.next('.sub-menu').addClass('active2');
            clicked.parent().addClass('angle-icon');
          });
        });
      } else if (clicked.html() === 'Dedications') {
        clicked.parent().animate({ height: '100%' }, 0, function() {
          clicked.next('.sub-menu').slideDown(500, function() {
            clicked.next('.sub-menu').addClass('active2');
            clicked.parent().addClass('angle-icon');
          });
        });
      } else if (clicked.siblings()) {
        // Other Active Menu Slide Up
        $('.active').slideUp(500, function() {
          $('.sub-menu').removeClass('active');
          $('.menu-item-has-children').removeClass('angle-icon');
        });
        // Active Menu Slide Down
        clicked.parent().animate({ height: '100%' }, 0, function() {
          clicked.next('.sub-menu').slideDown(500, function() {
            clicked.next('.sub-menu').addClass('active');
            clicked.parent().addClass('angle-icon');
          });
        });
      }
    } else {
      if (clicked.html() === 'Abortion') {
        clicked.next('.sub-menu').addClass('top-side-drop-down');
        clicked.parent().addClass('blue');
        $('.top-side-drop-down').slideDown(0, function() {
          $('.top-side-drop-down').animate({ width: '220px' }, 300);
        });
      } else if (clicked.html() === 'Dedications') {
        clicked.next('.sub-menu').addClass('side-drop-down');
        clicked.parent().addClass('blue');
        $('.side-drop-down').slideDown(0, function() {
          $('.side-drop-down').animate({ width: '220px' }, 300);
        });
      } else if (clicked.siblings()) {
        // Abortion Drop Down Slide Left
        $('.top-side-drop-down').animate({ width: '0px' }, 500, function() {
          $('.menu-item').removeClass('blue');
          $('.top-side-drop-down').slideUp(function() {
            $('.sub-menu').removeClass('top-side-drop-down');
          });
        });
        // Dedication Drop Down Slide Left
        $('.side-drop-down').animate({ width: '0px' }, 450, function() {
          $('.menu-item').removeClass('blue');
          $('.side-drop-down').slideUp(function() {
            $('.sub-menu').removeClass('side-drop-down');
          });
        });
        // Other Active Menu Slide Up
        setTimeout(function() {
          $('.active').slideUp(200, function() {
            $('.sub-menu').removeClass('active');
            $('.menu-item-has-children').removeClass('angle-icon');
          });
        }, 250);
        //  Active Menu Slide Down
        clicked.next('.sub-menu').animate({ width: '200px' }, 0, function() {
          clicked.next('.sub-menu').slideDown(500, function() {
            clicked.next('.sub-menu').addClass('active');
            clicked.parent().addClass('angle-icon');
          });
        });
      }
    }
  });
})(jQuery);
