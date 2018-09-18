(function($) {
  // Header Reset
  function reset() {
    $('.site-header').toggleClass('nav-site-header');
    $('.side-drop-down').animate({ width: '0px' }, 0);
    $('.top-side-drop-down').animate({ width: '0px' }, 0);
    $('.menu-item').removeClass('blue teal');
    $('.side-drop-down').slideUp(0);
    $('.top-side-drop-down').slideUp(0);
    $('.sub-menu').slideUp(0);
    $('.sub-menu').removeClass(
      'side-drop-down top-side-drop-down active active2'
    );
    $('.menu-item > a').removeClass('angle-icon angle-icon2');
  }
  // Second Sub Menu Reset
  function sideReset() {
    $('.top-side-drop-down').animate({ width: '0px' }, 250, function() {
      $('.top-side-drop-down').slideUp(function() {});
    });
    $('.side-drop-down').animate({ width: '0px' }, 250, function() {
      $('.side-drop-down').slideUp();
    });
    $('.sub-menu > .menu-item').removeClass('blue');
  }
  // First Sub Menu Reset
  function upReset() {
    setTimeout(function() {
      $('.active').slideUp(200, function() {
        $('.sub-menu').removeClass('active');
      });
    }, 250);
    $('.menu-item-has-children a').removeClass('angle-icon');
  }
  // Active Header All Sub Menu Reset
  function activeReset() {
    $('.active').slideUp(400, function() {
      $('.sub-menu').removeClass('active');
    });
    $('.active2').slideUp(400, function() {
      $('.sub-menu').removeClass('active2');
    });
    $('.menu-item-has-children > a').removeClass('angle-icon angle-icon2');
    $('.menu-item').removeClass('blue teal');
  }
  //  Click on Hamburger Icon
  $('.hamburger').on('click', function() {
    // Header Reset
    reset();
    // Slide Rest of Page Up when Active Header
    $('#content').slideUp(0);
    $('.site-footer').slideUp(0);
    $('.sub-menu').animate({ width: '100%' }, 0);
  });
  // Click on X Icon
  $('.exit-nav').on('click', function() {
    // Header Reset
    reset();
    // Slide Rest of Page Down when Regular Header
    $('#content').slideDown(0);
    $('.site-footer').slideDown(0);
    $('.sub-menu').animate({ width: '0' }, 0);
    $('.menu-item').animate({ height: '50px' }, 0);
  });
  // Click on Nav
  $('.menu-item a').on('click', function() {
    var clicked = $(this);
    var hasLink = clicked.attr('href');
    if (hasLink === '#') {
      event.preventDefault();
      // Active Header
      if ($('#masthead').hasClass('nav-site-header')) {
        // Second Sub Menu Slide Down
        if (clicked.parent().hasClass('side-slide')) {
          // Reset only when hasClass
          $('.active2').slideUp(500, function() {
            $('.sub-menu').removeClass('active2');
          });
          $('.menu-item-has-children > a').removeClass('angle-icon2');
          $('.menu-item').removeClass('teal');
          // Slide Down only when Doesnt hasClass
          if (!clicked.next('.sub-menu').hasClass('active2')) {
            clicked.parent().animate({ height: '100%' }, 0, function() {
              clicked.next('.sub-menu').slideDown(500, function() {
                clicked.next('.sub-menu').addClass('active2');
              });
            });
            // Add Color and Icon to Second Sub Menu
            setTimeout(function() {
              clicked.parent().addClass('teal');
              clicked.addClass('angle-icon2');
            }, 20);
          }
          // First Sub Menu Slide Down
        } else if ($('.menu > .menu-item')) {
          // Reset
          activeReset();
          // Only when Doesnt hasClass
          if (!clicked.next('.sub-menu').hasClass('active')) {
            // Add Color and Icon to First Sub Menu
            setTimeout(function() {
              clicked.parent().addClass('blue');
              clicked.addClass('angle-icon');
            }, 100);
            $('.menu-item').animate({ height: '25%' }, 400);
            // First Sub Menu Slide Down
            clicked.parent().animate({ height: '100%' }, 0, function() {
              clicked.next('.sub-menu').slideDown(400, function() {
                clicked.next('.sub-menu').addClass('active');
                $('.sub-menu > .menu-item-has-children').addClass('side-slide');
              });
            });
          }
        }
        // Regular Header
      } else if (clicked.parent().hasClass('side-slide')) {
        // If Top Menu Item
        if (clicked.parent().index() === 0) {
          if (clicked.parent().hasClass('blue')) {
            // Reset only when hasClass
            sideReset();
          } else {
            // Side Slide
            clicked.next('.sub-menu').addClass('top-side-drop-down');
            $('.top-side-drop-down').slideDown(0, function() {
              clicked.parent().addClass('blue');
              $('.top-side-drop-down').animate({ width: '230px' }, 300);
              clicked.slideDown(300);
            });
          }
          // If Not Top Menu Item
        } else {
          if (clicked.parent().hasClass('blue')) {
            // Reset only when hasClass
            sideReset();
          } else {
            // Side Slide
            clicked.next('.sub-menu').addClass('side-drop-down');
            clicked.parent().addClass('blue');
            $('.side-drop-down').slideDown(0, function() {
              $('.side-drop-down').animate({ width: '280px' }, 300);
            });
          }
        }
      } else {
        //  Sub Menu Down Slide
        if ($('.menu > .menu-item')) {
          // Reset
          sideReset();
          upReset();
          // Down Slide only when hasClass
          if (!clicked.next('.sub-menu').hasClass('active')) {
            clicked.addClass('angle-icon');
            clicked
              .next('.sub-menu')
              .animate({ width: '250px' }, 0, function() {
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
      // If href has value other than #
      return true;
    }
  });
})(jQuery);
