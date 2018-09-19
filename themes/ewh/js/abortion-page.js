(function($){


$( '.javascript-button' ).append( '<div class="tab-nav"><button class="tab-prev" id="tab-prev"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></button><button class="tab-next" id="tab-next"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></button></div>' );



var viewportWidth = $(document).width();
var widthLimit = (viewportWidth <= 660);

if (widthLimit) {
    dropDownMenu();
    setupTabs();
}

function dropDownMenu() {
$('.drop-down-mobile').hide(200);

$('.title-mobile').on('click', function(event) {
   event.preventDefault();
   var clicked = $(this);
   clicked.next('.drop-down-mobile').toggle(300);

}); 
}

  function setupTabs() {
    var $tabContent = $('.tab-content'); // cache the jQuery dom elem
    var tabIndex = 0; // set the tab index
    var tabLength = $tabContent.length; // get the number of tabs

    /**
     * Tabbed Navigation Functionality
     */
    $('.tab-nav button').on('click', function(event) {
        event.preventDefault();
      
      var buttonClicked = $(this).attr('id');

      if (buttonClicked === 'tab-prev' && tabIndex > 0) {

        tabIndex--;
        $tabContent.hide();
        $tabContent.eq(tabIndex).fadeIn(300);
      } else if (buttonClicked === "tab-next" && tabIndex < tabLength - 1) {
        tabIndex++;
        $tabContent.hide();
        $tabContent.eq(tabIndex).fadeIn(300);
      }
    });
  }


})(jQuery);