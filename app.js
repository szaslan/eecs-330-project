//alert("Please open this app using one of the iPhone devices in the toolbar of Chrome's developer tools, that is what we have been using for development.");


//log workout functions
currSideIsFront = true;

function setText(){

  if (localStorage.getItem("exercise") !== null)
    {
      var currentTime = new Date().toString().slice(0,15);
        var text = localStorage.getItem("exercise");

        document.getElementById('workout-logs').innerHTML = text;

    }
    if (localStorage.getItem("pain") !== null)
      {
          currSideIsFront = true
          var text = localStorage.getItem("pain");

          document.getElementById('pain-logs').innerHTML = text;
          document.getElementById('pain-logs-details').innerHTML = localStorage.getItem("painDetails");

          var coordinates = localStorage.getItem("painCoordinates");
          coordinates = coordinates.split(" ");
          for (var i = 0; i < coordinates.length; i+=3) {
            var xPos = coordinates[i];
            var yPos = Number(coordinates[i + 1].split("px")[0]) + 85;
            var painPoint = document.createElement("DIV");
            if (coordinates[i + 2] == "front") {
              painPoint.setAttribute("class", "pain-points-front pain-points");
            }
            else {
              painPoint.setAttribute("class", "pain-points-back pain-points");
            }
            painPoint.setAttribute("style", ("top: " + yPos.toString() + "px; left: " + xPos + ';'));
            document.getElementById("home-page").appendChild(painPoint);
          }
      }

}

function openPainPage() {
  document.getElementById('log-selection').style.display = "none";
  document.getElementById('log-pain').style.display = "block";
}

function openWorkoutPage() {
  document.getElementById('log-selection').style.display = "none";
  document.getElementById('log-workout').style.display = "block";
}

function closePainPage() {
  document.getElementById('log-selection').style.display = "block";
  document.getElementById('log-pain').style.display = "none";
}

function closeWorkoutPage() {
  document.getElementById('log-selection').style.display = "block";
  document.getElementById('log-workout').style.display = "none";
}

function displayDropdown() {

  var dropdown = document.getElementById('cardio-select');
  var cardio = document.getElementById('choice1');
  var strength = document.getElementById('choice2');

  if (cardio.checked) {
      dropdown.style.display = "flex";
  } else if (strength.checked) {
    dropdown.style.display = "none";
  }
}


function logWorkout(){
  if (document.getElementById('workout-time').value == "") {
    alert("You cannot submit an empty form!");
  }
  else {
    var workout = document.getElementById("workout-time").value + " Minute " + document.getElementById("cardio-dropdown").value
    localStorage.setItem('exercise', workout);
    openLogModal('You Logged a Workout!');
  }
}

function logPain(){
  var painDetails = document.getElementById("pain-information").value
  var points = document.getElementsByClassName('pain-points');
  if (points.length == 0) {
    alert("You cannot submit an empty form!");
  }
  else {
    var side = " front"
    if (points[0].className.split(" ")[0] !== "pain-points-front") {
      side = " back"
    }
    painCoordinates = points[0].style.left + " " + points[0].style.top + side
    for (var i = 1; i < points.length; i++) {
      side = " front"
      if (points[i].className.split(" ")[0] !== "pain-points-front") {
        side = " back"
      }
      painCoordinates = painCoordinates + " " + points[i].style.left + " " + points[i].style.top + side
    }
    localStorage.setItem('pain', "Lower Back Pain");
    localStorage.setItem('painDetails', painDetails);
    localStorage.setItem('painCoordinates', painCoordinates);
    openLogModal('You Logged a Pain!');
  }
}

function popupButton() {
  var popup = document.getElementById('myPopup');
  popup.classList.toggle("show");
}

function popupButton1() {
    var popup = document.getElementById('myPopup1');
    popup.classList.toggle("show");
}

function disable() {
  document.getElementById("myPopup").addEventListener("click", function() {
    document.getElementById("myPopup").disabled=true;
  });
}

function disable1() {
  document.getElementById("myPopup1").addEventListener("click", function() {
    document.getElementById("myPopup1").disabled=true;
  });
}
//login functions

function changeForm(){
  document.getElementById('login-form').style.display = "none";
  document.getElementById('create-form').style.display = "block";
}

function openLogModal(type) {
  document.getElementById('logged-modal').style.display = 'block';
  document.getElementById('logged-modal').children[1].children[0].innerHTML = type;
}
//log pain functions

function toggleImage() {
  currSideIsFront = !currSideIsFront
  if (currSideIsFront) {
    var frontSide =   document.getElementsByClassName("pain-points-front")
    for (var i = 0; i < frontSide.length; i++) {
      frontSide[i].style.display = 'block'
    }
    var backSide =   document.getElementsByClassName("pain-points-back")
    for (var i = 0; i < backSide.length; i++) {
      backSide[i].style.display = 'none'
    }
  }
  else {
    var backSide =   document.getElementsByClassName("pain-points-back")
    for (var i = 0; i < backSide.length; i++) {
      backSide[i].style.display = 'block'
    }
    var frontSide =   document.getElementsByClassName("pain-points-front")
    for (var i = 0; i < frontSide.length; i++) {
      frontSide[i].style.display = 'none'
    }
  }
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
  if (currSideIsFront) {
    painPoint.setAttribute("class", "pain-points-front pain-points");
  }
  else {
    painPoint.setAttribute("class", "pain-points-back pain-points");
  }
  painPoint.setAttribute("style", ("top: " + yPos.toString() + "px; left: " + xPos.toString() + 'px;'));
  document.getElementById("log-pain").appendChild(painPoint);
  var backSide =   document.getElementsByClassName("pain-points-back")
  if (!currSideIsFront) {
    for (var i = 0; i < backSide.length; i++) {
      backSide[i].style.display = 'block'
    }
  }
}
//strech functions

function narrowSelection(selection) {
  document.getElementById('muscle-groups-selection').style.display = 'none';
  document.getElementById('back-stretch-selection').style.display = 'initial';
  document.getElementById('stretch-headers').style.display = 'none';
  document.getElementById('back-header').style.display = 'initial';
}
function muscleGroups() {
  document.getElementById('muscle-groups-selection').style.display = 'initial';
  document.getElementById('back-stretch-selection').style.display = 'none';
  document.getElementById('stretch-headers').style.display = 'initial';
  document.getElementById('back-header').style.display = 'none';
}

function openVideo(name) {
  var stretches = ['https://www.youtube.com/embed/Ms4e1F17eDo', 'https://www.youtube.com/embed/DWmGArQBtFI', 'https://www.youtube.com/embed/V22xxybieHk', 'https://www.youtube.com/embed/ZiNXOE5EsZw', 'https://www.youtube.com/embed/kd8nxvs2R0g', 'https://www.youtube.com/embed/9hVZ4rc2_3Y', 'https://www.youtube.com/embed/_LfxpD4GuEI']
  document.getElementById('open-video').src= stretches[name];
  document.getElementById('video-modal').style.display = 'block';

}

function closeModal() {
  document.getElementById('video-modal').style.display = 'none';
}

//timeline functions
var timelineCount = 0;
var timelineContent = [{workout: localStorage.getItem("exercise"), pain: localStorage.getItem("pain"), painDetails: localStorage.getItem("painDetails")}, {workout: "Bench Press", pain: "No pain logged", painDetails: ""}, {workout: "Rock Climb", pain: "Finger pain", painDetails: "My joints are on fire"}, {workout: "Abs", pain: "No pain logged", painDetails: ""}]
var date = new Date();

function leftClick() {
  if (timelineCount < timelineContent.length - 1) {
    timelineCount++;
    var activity = timelineContent[timelineCount]
    document.getElementById("pain-logs").innerHTML = activity.pain;
    document.getElementById("workout-logs").innerHTML = activity.workout;
    document.getElementById("pain-logs-details").innerHTML = activity.painDetails;
    document.getElementById("timeline-days").innerHTML = ("March " + (date.getDate()-timelineCount));
  }
}

function rightClick() {
  if (timelineCount > 0) {
    timelineCount--;
    var activity = timelineContent[timelineCount]
    if (timelineCount == 0 & activity.pain == null) {
      document.getElementById("pain-logs").innerHTML = "No Pain Logged"
      document.getElementById("pain-logs-details").innerHTML = ""
    }
    else {
      document.getElementById("pain-logs").innerHTML = activity.pain;
      document.getElementById("pain-logs-details").innerHTML = activity.painDetails;
    }
    (timelineCount == 0 & activity.workout == null) ? document.getElementById("workout-logs").innerHTML = "No Workout Logged" : document.getElementById("workout-logs").innerHTML = activity.workout;
    if (timelineCount == 0) {
      document.getElementById("timeline-days").innerHTML = "Today"
    }
    else {
      document.getElementById("timeline-days").innerHTML = ("March " + (date.getDate()-timelineCount));
    }
  }
}
//comment

function addComment() {
  if (document.getElementById("add-comment").value == '' | document.getElementById("add-comment").value == 'Add a comment') {
    alert("Please submit a real comment.");
  }
  if (document.getElementById("add-comment").value != '' & document.getElementById("add-comment").value != 'Add a comment') {
    var comment = document.createElement("DIV");
    comment.setAttribute("class", "comment");
    var name = document.createElement("P");
    name.setAttribute("class", "comment-name");
    name.innerHTML = "John";
    var commentWord = document.createElement("h2");
    commentWord.innerHTML = document.getElementById("add-comment").value;
    commentWord.setAttribute("class", "comment-comment")
    comment.appendChild(name);
    comment.appendChild(commentWord);
    document.getElementById("comment-container").appendChild(comment);

  }
}
