//alert("Please open this app using one of the iPhone devices in the toolbar of Chrome's developer tools, that is what we have been using for development.");

function openLogPage() {
  document.getElementById('log-selection').style.display = "none";
  document.getElementById('log-pain').style.display = "block";
}


function toggleImage() {
  var currImage = document.getElementById('body-map').attributes.src;
  if (currImage.value == "assets/front.png") {
    currImage.value = "assets/back.png";
  }
  else {
    currImage.value = "assets/front.png";
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

function narrowSelection(selection) {
  document.getElementById('muscle-groups-selection').style.display = 'none';
  document.getElementById('back-stretch-selection').style.display = 'initial';

}

function openVideo(name) {
  var stretches = ['https://www.youtube.com/embed/Ms4e1F17eDo', 'https://www.youtube.com/embed/DWmGArQBtFI', 'https://www.youtube.com/embed/V22xxybieHk', 'https://www.youtube.com/embed/ZiNXOE5EsZw', 'https://www.youtube.com/embed/kd8nxvs2R0g', 'https://www.youtube.com/embed/9hVZ4rc2_3Y', 'https://www.youtube.com/embed/_LfxpD4GuEI']
  document.getElementById('open-video').src= stretches[name];
  document.getElementById('video-modal').style.display = 'block';

}

function closeModal() {
  document.getElementById('video-modal').style.display = 'none';
}