$(document).ready(function(){

// $(".advantages-class h2").on("click", function(event) {
//     event.preventDefault();
//     var clickedItem = $(this);
//     // var clickedHref = clickedItem.attr("href");
//     // console.log(clickedHref);
//     if (clickedItem == "#") {
//       clickedItem.next('.sub-menu').toggleClass('active');
//     } else {
//       return true;
//     }
//   }); 

$( "h2" ).click(function() {
    $( "p" ).toggle( "slow" );
  });


});