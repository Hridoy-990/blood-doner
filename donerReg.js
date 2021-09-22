function formValidation() {
  var name = document.getElementById("name").value;
  var namePattern = /^[a-zA-Z ]+$/;
  if (name.length < 3 || name.length > 20) {
    document.getElementById("ename").innerHTML =
      "Input legth must be between (3 - 20) char";
    return false;
  } else if (!name.match(namePattern)) {
    document.getElementById("ename").innerHTML = "Only alphabet and space";
    return false;
  }

  var number = document.getElementById("number").value;
  var numerPattern = /(\+88)?-?01[3-9]\d{8}$/;
  if (!number.match(numerPattern)) {
    document.getElementById("enumber").innerHTML = "Invalid Number !";
    return false;
  }

  var age = document.getElementById("age").value;
  var agePattern = /^[1-9][0-9]*$/;
  if (age.length > 3) {
    document.getElementById("eage").innerHTML =
      "length must be between (1 - 3) digit !";
    return false;
  } else if (!age.match(agePattern)) {
    document.getElementById("eage").innerHTML = "Only Digit !";
    return false;
  }

  var pass = document.getElementById("pass").value;
  var passPattern = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])).{8,14}$/;
  if (pass.length < 8 || pass.length > 14) {
    document.getElementById("epass").innerHTML =
      "Password length must be between (8 - 14) !";
    return false;
  }
  if (!pass.match(passPattern)) {
    document.getElementById("epass").innerHTML =
      "Must be use (digit , alphabat (small , cpital) !";
    return false;
  }

  var confirmPassword = document.getElementById("cpass").value;
  if (pass != confirmPassword) {
    document.getElementById("ecpass").innerHTML =
      "Password and Confirm Password is not match !";
    return false;
  }
}
