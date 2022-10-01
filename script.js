
function errors(){

    let valid = true, error = "", field = "";

    // name
    field = document.getElementById("Fname");
    error = document.getElementById("cname");
    if (!field.checkValidity()) {
      valid = false;
      field.style.outline = "2px solid hsl(0, 100%, 74%)";
      field.classList.add("err");
      field.style.color = "hsl(0, 100%, 74%)";
      error.innerHTML = "First Name cannot be empty\r\n";
    } else {
      field.classList.remove("err");
      field.style.outline = "1px hsl(246, 25%, 77%) solid";
      field.style.color = "hsl(249, 10%, 26%)";
      error.innerHTML = "";
    }

    field = document.getElementById("Lname");
    error = document.getElementById("clname");
    if (!field.checkValidity()) {
      valid = false;
      field.style.outline = "2px solid hsl(0, 100%, 74%)";
      field.style.color = "hsl(0, 100%, 74%)";
      field.classList.add("err");
      error.innerHTML = "Last Name cannot be empty\r\n";
    } else {
      field.classList.remove("err");
      field.style.outline = "1px hsl(246, 25%, 77%) solid";
      field.style.color = "hsl(249, 10%, 26%)";
      error.innerHTML = "";
    }

    field = document.getElementById("Email");
    error = document.getElementById("email");
    
    if (field.value.trim().length === 0) {
        valid = false;
        field.style.outline = "2px solid hsl(0, 100%, 74%)";
        field.style.color = "hsl(0, 100%, 74%)";
        field.classList.add("err");
        error.innerHTML = "Email cannot be empty\r\n";
      }
    
    else if (!field.checkValidity()) {
      valid = false;
      field.style.outline = "2px solid hsl(0, 100%, 74%)";
      field.style.color = "hsl(0, 100%, 74%)";
      field.classList.add("err");
      error.innerHTML = "Looks like this is not an email\r\n";
    } 
    
    else {
      field.classList.remove("err");
      field.style.outline = "1px hsl(246, 25%, 77%) solid";
      field.style.color = "hsl(249, 10%, 26%)";
      error.innerHTML = "";
    }

    field = document.getElementById("Pass");
    error = document.getElementById("password");
    if (!field.checkValidity()) {
      valid = false;
      field.style.outline = "2px solid hsl(0, 100%, 74%)";
      field.style.color = "hsl(0, 100%, 74%)";
      field.classList.add("err");
      error.innerHTML = "Password cannot be empty\r\n";
    } else {
      field.classList.remove("err");
      field.style.outline = "1px hsl(246, 25%, 77%) solid";
      field.style.color = "hsl(249, 10%, 26%)";
      error.innerHTML = "";
    }

    
}

const form = document.querySelector("form");



form.addEventListener('submit', function(event) {
    event.preventDefault();
    errors();
});
