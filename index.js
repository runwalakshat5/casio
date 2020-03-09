for (var i = 0; i < document.querySelectorAll(".casio").length; i++) {
  document.querySelectorAll(".casio")[i].addEventListener("click", function() {
    //What to do when click detected
    this.style.color = "#142850";
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "Sa":
      var Sa = new Audio("sounds/Sa.mp3");
      Sa.play();
      break;
    case "Re":
      var Re = new Audio("sounds/Re.mp3");
      Re.play();
      break;
    case "Ga":
      var Ga = new Audio("sounds/Ga.mp3");
      Ga.play();
      break;
    case "Ma":
      var Ma = new Audio("sounds/Ma.mp3");
      Ma.play();
      break;
    case "Pa":
      var Pa = new Audio("sounds/Pa.mp3");
      Pa.play();
      break;
    case "Dh":
      var Dh = new Audio("sounds/Dh.mp3");
      Dh.play();
      break;
    case "Ni":
      var Ni = new Audio("sounds/Ni.mp3");
      Ni.play();
      break;
    case "s":
      var Sa = new Audio("sounds/Sa.mp3");
      Sa.play();
      break;
    case "r":
      var Re = new Audio("sounds/Re.mp3");
      Re.play();
      break;
    case "g":
      var Ga = new Audio("sounds/Ga.mp3");
      Ga.play();
      break;
    case "m":
      var Ma = new Audio("sounds/Ma.mp3");
      Ma.play();
      break;
    case "p":
      var Pa = new Audio("sounds/Pa.mp3");
      Pa.play();
      break;
    case "d":
      var Dh = new Audio("sounds/Dh.mp3");
      Dh.play();
      break;
    case "n":
      var Ni = new Audio("sounds/Ni.mp3");
      Ni.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
