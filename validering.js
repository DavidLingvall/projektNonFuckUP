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
  if(ok){
    setJson();
  }
  return ok;
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
