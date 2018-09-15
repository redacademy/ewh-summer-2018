(function($){

(function() {
  var viewportWidth = $(document).width();
  if (viewportWidth <= 660) {
    setupTabs();
  }

  function setupTabs() {
    var $tabContent = $(".tab-content"); // cache the jQuery dom elem
    var $mythFactClass = $(".myth-fact-class"); // main container div
    var tabIndex = 0; // set the tab index
    var tabLength = $mythFactClass.length; // get the number of tabs

    /**
     * Tabbed Navigation Functionality
     */
    $(".tab-nav button").on("click", function() {
      var buttonClicked = $(this).attr("class");

      if (buttonClicked === "tab-prev" && tabIndex > 0) {
        tabIndex--;
        $tabContent.hide();
        $tabContent.eq(tabIndex).fadeIn(300);
      } else if (buttonClicked === "tab-next" && tabIndex < tabLength - 1) {
        tabIndex++;
        $tabContent.hide();
        $mythFactClass.eq(tabIndex).fadeIn(300);
      }
    });
  }
})();

})(jQuery);