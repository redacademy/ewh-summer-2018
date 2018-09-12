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
    $('.top-side-drop-down').animate({ width: '0px' }, 350, function() {
      $('.menu-item').removeClass('blue');
      $('.top-side-drop-down').slideUp(function() {
        $('.sub-menu').removeClass('top-side-drop-down');
      });
    });
    $('.side-drop-down').animate({ width: '0px' }, 350, function() {
      $('.menu-item').removeClass('blue');
      $('.side-drop-down').slideUp(function() {
        $('.sub-menu').removeClass('side-drop-down');
      });
    });
    $('.active').slideUp(250, function() {
      $('.sub-menu').removeClass('active');
    });
    $('.menu-item-has-children').removeClass('angle-icon');
  }
  function activeReset() {
    $('.active').slideUp(500, function() {
      $('.sub-menu').removeClass('active');
    });
    $('.active2').slideUp(500, function() {
      $('.sub-menu').removeClass('active2');
    });
    $('.menu-item-has-children').removeClass('angle-icon');
    $('.menu-item-has-children').removeClass('angle-icon2');
    $('.menu-item').removeClass('blue');
    $('.menu-item').removeClass('teal');
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
          setTimeout(function() {
            clicked.parent().addClass('teal');
            clicked.parent().addClass('angle-icon2');
          }, 150);
          clicked.parent().animate({ height: '100%' }, 0, function() {
            clicked.next('.sub-menu').slideDown(500, function() {
              clicked.next('.sub-menu').addClass('active2');
            });
          });
        } else if ($('.menu > .menu-item')) {
          // Other Menus Reset
          activeReset();
          setTimeout(function() {
            clicked.parent().addClass('blue');
            clicked.parent().addClass('angle-icon');
          }, 100);
          $('.menu-item').animate({ height: '25%' }, 0);
          // Outside Menus Slide Down
          clicked.parent().animate({ height: '100%' }, 0, function() {
            clicked.next('.sub-menu').slideDown(500, function() {
              clicked.next('.sub-menu').addClass('active');
              $('.sub-menu > .menu-item-has-children').addClass('side-slide');
            });
          });
        }
        // Regular Header
        // Side Slide
      } else if (clicked.parent().hasClass('side-slide')) {
        // if Top Menu Item Side Slide
        if (clicked.parent().index() === 0) {
          clicked.next('.sub-menu').addClass('top-side-drop-down');
          clicked.parent().addClass('blue');
          $('.top-side-drop-down').slideDown(0, function() {
            $('.top-side-drop-down').animate({ width: '230px' }, 300);
          });
          // if Not Top Menu Item Side SLide
        } else {
          clicked.next('.sub-menu').addClass('side-drop-down');
          clicked.parent().addClass('blue');
          $('.side-drop-down').slideDown(0, function() {
            $('.side-drop-down').animate({ width: '280px' }, 300);
          });
        }
      } else {
        //  Down Slide
        if ($('.menu > .menu-item')) {
          sideReset();
          if (!clicked.next('.sub-menu').hasClass('active')) {
            clicked.parent().addClass('angle-icon');
            clicked
              .next('.sub-menu')
              .animate({ width: '250px' }, 100, function() {
                clicked.next('.sub-menu').slideDown(500, function() {
                  $('.sub-menu > .menu-item-has-children').addClass(
                    'side-slide'
                  );
                  clicked.next('.sub-menu').addClass('active');
                });
              });
          }
        }
      }
    } else {
      return true;
    }
  });
})(jQuery);
