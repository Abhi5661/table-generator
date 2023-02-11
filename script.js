function generate() {
  var num = document.getElementById("no").value;
  var output = "";
  for (let i = 1; i < 11; i++) {
    output = output + num + "x" + i + "=" + num * i + "<br>";
  }
  document.getElementById("content").innerHTML = output;
}
