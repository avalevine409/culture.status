/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var headings = ["Welcome"]
 // "Bienvenido","Bienvenu","Benvenuto", "Bem vinda","Tonga Soa"];
var i = 0;

function updateHeading() {
  document.getElementById("myHeader").innerHTML = headings[i];
  if (i < headings.length - 1) {
  i++;
  }
  else {
    i = 0;
  }
  setTimeout("updateHeading()", 1000);
}

window.onload = updateHeading;
