function myFunction() {
  var checkBox1 = document.getElementById("yes_attachment");
  var upload = document.getElementById("upload");
  var yes = document.getElementById("yes");
  if (checkBox1.checked == true) {
    yes.style.color = "#59bcdf";
    upload.style.display = "block";
  } else {
    yes.style.color = "#777777";
    upload.style.display = "none";
  }
}
