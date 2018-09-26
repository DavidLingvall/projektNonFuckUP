var images = new Array();
<<<<<<< HEAD
images[0] = "bild1.jpg";
images[1] = "bild2.jpg";
images[2] = "bild3.jpg";
var i = 0;
=======
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
>>>>>>> b0d831f6c04fa3063c60c2bf4c9b60f0393fb63c
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
