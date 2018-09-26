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

  //'https://api.github.com/search/repositories?q=javascript%20is%3Atrending&sort=stars&order=desc'
  $(document).ready(() => {
  	var items = [],
  		object = {};

  	function listItems() {

      var i = 0;
  		items.forEach((item) => {
        if(i === 5){
          return;
        }
        var tableRow = $(
  				`<tr>
  					<td>${item.id}</td>
  					<td>${item.name}</td>
  					<td>${item.language}</td>
  					<td>${item.watchers}</td>
  				</tr>`
  			);
        i++;
  			$('#itemList').append(tableRow);
  		});
  	}

  	function loadJSON() {
  		$.getJSON(
        //'https://api.github.com/search/repositories?q=javascript%20is%3Atrending&sort=stars&order=desc',
        'https://api.github.com/search/repositories?q=language:javascript&sort=watchers&order=desc',
        (data) => {
  				console.log(data);
  				items = data.items.map((item) => {
  					return {
  						...item,
  					};
  				});
  				listItems();
  			}
  		);
  	}
  	loadJSON();
  });
  $("#ani").click(function(){
    $("#ani2").slideToggle();
  });
