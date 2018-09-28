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
  if (validateSurname()) {
    return false;
  }
  else if (validateLastname()) {
    return false;
  }
  else if (validateEmail()) {
    return false;
  }
  else if (validatePhonenumber()) {
    return false;
  }
}

function validateSurname(){
  var surname = document.forms["form"]["firstname"].value;
  var minSur = surname.length;
  if(surname == ""){
    alert("Fyll i ditt förnamn!");
    return true;
  }
  else if (minSur < 3) {
    alert("Fyll i minst 3 bokstäver i fältet förnamn!")
    return true;
  }
  return false;
}
function validateLastname(){
  var lastname = document.forms["form"]["lastname"].value;
  var minLast=lastname.length;
  if (lastname=="") {
    alert("Fyll i ditt efternamn!");
    return true;
  }
  else if (minLast < 3) {
    alert("Fyll i minst 3 bokstäver i fältet efternamn!")
    return true;
  }
  return false;
}
function validateEmail(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mailFalse = true;
    var email = document.forms["form"]["E-post"].value;
    if (email == "") {
      alert("Fyll i ditt E-post!");
      return true;
    }
    else if (email.match(mailformat)){
      mailFalse = true;
    }
    else if (mailFalse) {
      alert("Ogiltigt format på mail!");
      return true;
    }
    return false;
}
function validatePhonenumber(){
    var phoneFormat = /^[0-9+]+$/;
    var phoneFalse = true;
    var phonenumber = document.forms["form"]["phonenumber"].value;
    var minNumber = phonenumber.length;
    if (phonenumber == "") {
      alert("Fyll i ditt telefonnummer!");
      return true;
    }
    else if (phonenumber.match(phoneFormat)) {
      phoneFalse = true;
    }
    else if (phoneFalse){
      alert("Ogiltigt format på telefonnummer!")
      return true;
    }
    if (minNumber < 4) {
      alert("Fyll i minst 4 nummer i fältet telefon!")
      return true;
    }
    return false;
}
