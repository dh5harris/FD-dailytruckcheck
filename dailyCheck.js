// alert("it works!")

function setFocus() {
  document.getElementById("username").focus();
}

function validateLoginForm() {
  if (document.getElementById("username").value == '') {
    alert("Username cannot be blank");
    document.getElementById("username").focus();
    return false;
  }
  if (document.getElementById("password").value == '') {
    alert("Password cannot be blank");
    document.getElementById("password").focus();
    return false;
  }
}