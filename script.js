let form = document.querySelector("form");

document.addEventListener('invalid', (function(){
    return function(e) {

      e.preventDefault();

      check();
    };
})(), true);

function check () {
     // (C2) NAME
    let field1 = document.getElementById("Fname");
    let error1 = document.getElementById("cname");
    if (!field1.checkValidity()) {
      valid = false;
      field1.classList.add("err");
      error1.innerHTML = "First Name cannot be empty\r\n";
    } else {
      field1.classList.remove("err");
      error1.innerHTML = "";
    }

    // (C3) LAST NAME
    let field2 = document.getElementById("Lname");
    let error2 = document.getElementById("clname");
    if (!field2.checkValidity()) {
        valid = false;
        field2.classList.add("err");
        error2.innerHTML = "Last Name cannot be empty\r\n";
    } else {
        field2.classList.remove("err");
        error2.innerHTML = "";
    }
    
    // (C4) EMAIL
    let field3 = document.getElementById("Email");
    let error3 = document.getElementById("email");
    if (!field3.checkValidity()) {
        valid = false;
        field3.classList.add("err");
        error3.innerHTML = "Looks like this is not an email\r\n";
    } else {
        field3.classList.remove("err");
        error3.innerHTML = "";
    }
    
    // (C5) PASSWORD
    let field4 = document.getElementById("Pass");
    let error4 = document.getElementById("password");
    if (!field4.checkValidity()) {
      valid = false;
      field4.classList.add("err");
      error4.innerHTML = "Password cannot be empty\r\n";
    } else {
      field4.classList.remove("err");
      error4.innerHTML = "";
    }
  

  
event.preventDefault()
    // (C4) RESULT
    return valid;
  }

