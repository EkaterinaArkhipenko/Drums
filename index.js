
var numberOfButtons=document.querySelectorAll(".drum").length;

var audio= new Audio("sounds/crash.mp3");

for ( var i = 0;  i < numberOfButtons;  i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

var buttonInnerHTML = this.innerHTML;

playSound(buttonInnerHTML);
buttonAmimation(buttonInnerHTML);

});
}
document.addEventListener("keydown", function(event) {
  playSound(event.key);
buttonAmimation(event.key);

});

switch(buttonInnerHTML) {
  case "w":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "a":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case "d":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;


          case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
          break;


            case "k":
              var audio = new Audio("sounds/tom-3.mp3");
              audio.play();
            break;

              case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
              break;
  default: console.log("buttonInnerHTML")

};    // audio.play();


function playSound(key) {
switch(key) {
  case "w":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "a":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case "d":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;


          case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
          break;


            case "k":
              var audio = new Audio("sounds/tom-3.mp3");
              audio.play();
            break;

              case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
              break;
  default: console.log("buttonInnerHTML")

}
};


function buttonAmimation(currentKey) {
  var activeButton=document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 150);
}
