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
//function timer(){}
  var x;
  var y;
$('#bildSpel').mouseover(function(){
 x = setInterval(bildSpel, 4000);
});

$('#bildSpel').mouseout(function(){
  clearInterval(x);
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

function setLists(){
  setListJs();
  setListCss();
}

function setListJs() {

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
  				</tr>
          `
  			);
        i++;

  			$('#itemListJs').append(tableRow);

  		});
  	}

  	function loadJSON() {
  		$.getJSON(
        'https://api.github.com/search/repositories?q=language:javascript&sort=watchers&order=desc',
        (data) => {
  				//console.log(data);
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
function setListCss() {

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
  				</tr>
          `
  			);
        i++;

  			$('#itemListCSS').append(tableRow);

  		});
  	}

  	function loadJSON() {
  		$.getJSON(
        'https://api.github.com/search/repositories?q=language:css&sort=watchers&order=desc',
        (data) => {
  				//console.log(data);
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
  var ok = true
  if(validateSurname()){
    $('#fvali').text('Minst 3 bokstäver')
    ok = false;
  }
  if(validateLastname()){
    $('#lvali').text('Minst 3 bokstäver')
    ok = false;
  }
  if(validateEmail()){
    $('#evali').text('Ogiltigt format på mail')
    ok = false;
  }
  if(validatePhonenumber()){
    $('#phvali').text("Ogiltigt format på telefonnummer!")
    ok = false;
  }
  if(validatePost()){
    $('#povali').text("Fyll i något i rutan")
    ok = false;
  }
  return ok;
  setJson();
}

document.getElementById("fname").oninput = function() {
  validateSurname();
};
document.getElementById("lname").oninput = function() {
  validateLastname();
};
document.getElementById("epost").oninput = function() {
  validateEmail();
};
document.getElementById("phone").oninput = function() {
  validatePhonenumber();
};
document.getElementById("post").oninput = function() {
  validatePost();
};


function validateSurname(){
  var surname = document.forms["form"]["firstname"].value;
  var minSur = surname.length;
  if (minSur < 3) {
    $('#fvali').text('Minst 3 bokstäver')
    return true;
  }
  else if(minSur >= 3){
    $('#fvali').text('')
  }

}
function validateLastname(){
  var lastname = document.forms["form"]["lastname"].value;
  var minLast=lastname.length;
  if (minLast < 3) {
    $('#lvali').text('Minst 3 bokstäver')
    return true;
  }
  else if(minLast >= 3){
    $('#lvali').text('')
  }
}
function validateEmail(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.forms["form"]["E-post"].value;
    var mailFalse = true;
    if (email.match(mailformat)){
      mailFalse = false;
    }
    else if (mailFalse) {
      $('#evali').text('Ogiltigt format på mail')
      return true;
    }
    if (mailFalse == false) {
      $('#evali').text('')
    }
}
function validatePhonenumber(){
    var phoneFormat = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    var phoneFalse = true;
    var phonenumber = document.forms["form"]["phonenumber"].value;
    var minNumber = phonenumber.length;
    if (phonenumber.match(phoneFormat)) {
      phoneFalse = false;
    }
    else if (phoneFalse){
      $('#phvali').text("Ogiltigt format på telefonnummer!")
      return true;
    }
    if (phoneFalse == false) {
      $('#phvali').text("")
    }
}
function validatePost(){
    var post = document.forms["form"]["messege"].value;
    if (post == ""){
      return true;
    }
}

var personArray = [];

function setJson(){
    var fnameValue = document.getElementById('fname').value;
    var lnameValue = document.getElementById('lname').value;
    var emailValue = document.getElementById('epost').value;
    var phoneValue = document.getElementById('phone').value;
    var postValue = document.getElementById('post').value;

    perObj = {
                firstname:fnameValue,
                lastname:lnameValue,
                email:emailValue,
                phonenumber:phoneValue,
                post:postValue
              };
    personArray.push(perObj);

    console.log(personArray);

    localStorage.personRecord = JSON.stringify(personArray);
}
function init(){
  if (localStorage.personRecord) {
    personArray = JSON.parse(localStorage.personRecord);
    var i = personArray.length - 1;
    $("#fname").val(personArray[i].firstname);
    $("#lname").val(personArray[i].lastname);
    $("#epost").val(personArray[i].email);
    $("#phone").val(personArray[i].phonenumber);
    $("#post").val(personArray[i].post);
  }
}
