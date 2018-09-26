var images = new Array();
images[0] = "pic1.jpg";
images[1] = "pic2.jpg";
images[2] = "pic3.jpg";
images[3] = "pic4.jpg";
images[4] = "pic5.jpg";
images[5] = "pic6.jpg";
images[6] = "pic7.jpg";
images[7] = "pic8.jpg";
images[8] = "pic9.jpg";
var i = 1;

function bytBild(){
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
}
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

var theData = [];
 fetch('https://api.github.com/users/chriscoyier/repos')
   .then(response => response.json())
   .then(data => {
     console.log(data)
   });

$(document).ready(function(){

  $("#ani").click(function(){

    $("#ani2").slideToggle();
  });
});
