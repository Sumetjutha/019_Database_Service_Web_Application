function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var button1 = document.getElementById("button1");
  var checkText = document.getElementById("checkText");
  if (checkBox.checked == true) {
    checkText.style.color = "yellow";
    button1.style.display = "block";
  } else {
    checkText.style.color = "whitesmoke";
    button1.style.display = "none";
  }
}
