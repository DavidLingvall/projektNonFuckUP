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
  var timer = setInterval(bildSpel, 4000);
}
$('#bildSpel').hover(function(){
  clearTimeout(timer);
});

function bildSpel(){
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
function setList() {
  	var items = [],
  		object = {};

  	function listItems() {

      var i = 1;
  		items.forEach((item) => {
        if(i === 6){
          return;
        }
        var tableRow = $(
  				`<tr>
  					<td><a href="${item.html_url}">${item.name}</a></td>
            <td><a href="${item.html_url}">${item.owner.login}</a></td>
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

};
  $("#ani").click(function(){
    $("#ani2").slideToggle();
  });

  function validate(){

    var surname = document.forms["form"]["firstname"].value;
    var lastname = document.forms["form"]["lastname"].value;
    var min=surname.length;
    var minLast=lastname.length;
    if(surname =="" ){

      alert("Fyll i ditt förnamn!");
      return false;
    }


    if (min < 3) {
      alert("Fyll i minst 3 bokstäver i fältet förnamn!")
      return false;
    }

    if (minLast < 3) {
      alert("Fyll i minst 3 bokstäver i fältet efternamn!")
      return false;
    }

    else if (lastname=="") {
      alert("Fyll i ditt efternamn!");
      return false;
    }

  }
