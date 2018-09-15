(function($){

$('.arrow > a').on('click', function(){
  console.log('hi');
var clicked = $(this);
if(clicked.hasClass('before')){
$('.abortion-procedure-block').html(

);
// `<a href="${restResult[i].link}">
// <div class="portfolio-grid-item">
//   <div class="img-container" >
//     <img src="${propertyImage}">
//   </div>
//   <div class="title-container">
//     <p>${restResult[i].title.rendered}</p>
//   </div>
// </div>
// </a>`
} else if(clicked.hasClass('during')){
  $('.abortion-procedure-block').html(
    
  ); 
} else if(clicked.hasClass('before')){
  $('.abortion-procedure-block').html(

  ); 
}
});



})(jQuery);
