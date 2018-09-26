var images = new Array();
images[0] = "bild1.jpg";
images[1] = "bild2.jpg";
images[2] = "bild3.jpg";
var i = 0;
function timer(){
  setInterval(test, 4000);
}
function test(){
  $('#bildSpel').fadeOut(2000, function(){
    if (i < images.length) {
      $('#bildSpel').attr('src', images[i]);
      $('#bildSpel').fadeIn(2000);
      i++;
    }
    else if (i == images.length) {
      i=0;
      $('#bildSpel').attr('src', images[i]);
      $('#bildSpel').fadeIn(2000);
      i++;
    }
  });
}
$(document).ready(function(){
  var theData = [];
  fetch('https://api.github.com/users/chriscoyier/repos')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });






});
