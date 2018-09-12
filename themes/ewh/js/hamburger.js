(function($) {
  // Drop Down Reset
  function reset() {
    $('.site-header').toggleClass('nav-site-header');
    $('.side-drop-down').animate({ width: '0px' }, 0);
    $('.top-side-drop-down').animate({ width: '0px' }, 0);
    $('.menu-item').removeClass('blue');
    $('.side-drop-down').slideUp(0);
    $('.top-side-drop-down').slideUp(0);
    $('.sub-menu').slideUp(0);
    $('.sub-menu').removeClass(
      'side-drop-down top-side-drop-down active active2'
    );
    $('.menu-item').removeClass('angle-icon');
  }
  // Side Drop Down Reset
  function sideReset() {
    $('.top-side-drop-down').animate({ width: '0px' }, 450, function() {
      $('.menu-item').removeClass('blue');
      $('.top-side-drop-down').slideUp(function() {
        $('.sub-menu').removeClass('top-side-drop-down');
      });
    });
    $('.side-drop-down').animate({ width: '0px' }, 450, function() {
      $('.menu-item').removeClass('blue');
      $('.side-drop-down').slideUp(function() {
        $('.sub-menu').removeClass('side-drop-down');
      });
    });
    setTimeout(function() {
      $('.active').slideUp(400, function() {
        $('.sub-menu').removeClass('active');
        $('.menu-item-has-children').removeClass('angle-icon');
      });
    }, 50);
  }
  //  Click on Hamburger Icon
  $('.hamburger').on('click', function() {
    reset();
    $('#content').slideUp(0);
    $('.site-footer').slideUp(0);
    $('.sub-menu').animate({ width: '100%' }, 0);
  });
  // Click on X Icon
  $('.exit-nav').on('click', function() {
    reset();
    $('#content').slideDown(0);
    $('.site-footer').slideDown(0);
    $('.sub-menu').animate({ width: '0' }, 0);
    $('.menu-item').animate({ height: '30px' }, 0);
  });
  // Click on Nav
  $('.menu-item a').on('click', function() {
    var clicked = $(this);
    var hasLink = clicked.attr('href');
    if (hasLink === '#') {
      // Active Header
      if ($('#masthead').hasClass('nav-site-header')) {
        //Inside Menus Slide Down
        if (clicked.parent().hasClass('side-slide')) {
          clicked.parent().animate({ height: '100%' }, 0, function() {
            clicked.next('.sub-menu').slideDown(500, function() {
              clicked.next('.sub-menu').addClass('active2');
              clicked.parent().addClass('angle-icon');
            });
          });
        } else if ($('.menu > .menu-item')) {
          // Other Menus Reset
          sideReset();
          $('.active2').slideUp(500, function() {
            $('.sub-menu').removeClass('active2');
            $('.menu-item-has-children').removeClass('angle-icon');
          });
          // Outside Menus Slide Down
          clicked.parent().animate({ height: '100%' }, 0, function() {
            clicked.next('.sub-menu').slideDown(500, function() {
              clicked.next('.sub-menu').addClass('active');
              clicked.parent().addClass('angle-icon');
              $('.sub-menu > .menu-item-has-children').addClass('side-slide');
            });
          });
        }
        // Regular Header
        // Side Slide
      } else if (clicked.parent().hasClass('side-slide')) {
        // if Top Menu Item
        if (clicked.parent().index() === 0) {
          clicked.next('.sub-menu').addClass('top-side-drop-down');
          clicked.parent().addClass('blue');
          $('.top-side-drop-down').slideDown(0, function() {
            $('.top-side-drop-down').animate({ width: '200px' }, 300);
          });
          // if Not Top Menu Item
        } else {
          clicked.next('.sub-menu').addClass('side-drop-down');
          clicked.parent().addClass('blue');
          $('.side-drop-down').slideDown(0, function() {
            $('.side-drop-down').animate({ width: '220px' }, 300);
          });
        }
      } else {
        //  Down Slide
        if ($('.menu > .menu-item')) {
          sideReset();
          clicked.next('.sub-menu').animate({ width: '200px' }, 0, function() {
            clicked.next('.sub-menu').slideDown(500, function() {
              clicked.next('.sub-menu').addClass('active');
              clicked.parent().addClass('angle-icon');
              $('.sub-menu > .menu-item-has-children').addClass('side-slide');
            });
          });
        }
      }
    } else {
      return true;
    }
  });
})(jQuery);