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

<<<<<<< HEAD
$("h3").on("click", function() {
    // $(this).css({ background: "#666", color: "white" });
  
    // $(this)
    //   .children()
    //   .css("display", "block");
  
    $(this)
      .next("ol")
      .slideDown(500, "easeOutBounce");

    // $(this)
    //   .children()
    //   .slideDown(500, "easeOutBounce");
  
    // $(this)
    //   .siblings()
    //   .css({ background: "white", color: "#000" });
    // $(this)
    //   .siblings()
    //   .find("p")
    //   .delay(1000)
    //   .slideUp(1000, "easeInOutBack");
    
=======
$( 'h2' ).click(function() {
    $( 'p' ).toggle( 'slow' );
>>>>>>> 867ca63b12f4265e8eb1490b618538781e130e4a
  });
  


});