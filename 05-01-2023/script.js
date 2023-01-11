let Validation = () => {
  let name = document.forms.userDetails.name.value;
  let comment = document.getElementById("comment").value;
  let radio = document.getElementsByName("gender");
  if (name == "") {
    alert("All fields are compulsory");
    document.forms.userDetails.name.focus();
    return false;
  }
  if (comment == "") {
    alert("All fields are compulsory");
    document.getElementById("comment").focus();
    return false;
  }
  if (radio[0].checked == false && radio[1].checked == false) {
    alert("All fields are compulsory");
    document.forms.userDetails.gender[0].focus();
    return false;
  }

  return true;
};
