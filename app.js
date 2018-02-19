function openLogPage() {
  document.getElementById('log-selection').style.display = "none";
  document.getElementById('log-pain').style.display = "block";
}


function toggleImage() {
  var currImage = document.getElementById('body-map').attributes.src;
  var currButton = document.getElementById('image-toggle');
  if (currImage.value == "assets/front.png") {
    currImage.value = "assets/back.png";
    currButton.innerHTML = "Switch to Front"
  }
  else {
    currImage.value = "assets/front.png";
    currButton.innerHTML = "Switch to Back";
  }

}

function markPain(e) {
  var xPos = e.clientX;
  var yPos = e.clientY;
  var painPoint = document.createElement("DIV");
  painPoint.setAttribute("class", "pain-points");
  painPoint.setAttribute("style", ("top: " + yPos.toString() + "px; left: " + xPos.toString() + 'px;'));
  document.getElementById("log-pain").appendChild(painPoint);

}

