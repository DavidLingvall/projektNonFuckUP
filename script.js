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

var items = [];

  //fetch('https://api.github.com/search/repositories?q=javascript%20is%3Atrending&sort=stars&order=desc')

  fetch('http://json-example.herokuapp.com/')
   .then(response => response.json())
   .then(data => {
     items = data;
   });


$('#btn').click(function(){
/*
  $.getJSOn(
    'http://json-example.herokuapp.com/',
    function(data){
      items = data;
    }
  );*/
   console.log(items)
   $('.book-row').remove();
   $.each(items, function(ind, item) {
     var tableRow = $(
       `<tr class="book-row" >
         <td>${item.id}</td>
         <td>${item.name}</td>
       </tr>`
     );
     $('#listOfBooks').append(tableRow);
   });

});


  $("#ani").click(function(){
    $("#ani2").slideToggle();
  });
