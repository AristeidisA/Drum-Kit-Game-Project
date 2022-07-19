// 1OS TROPOS LUSHS
// BUTTON PRESS

let Btns = document.querySelectorAll(".drum").length;



function btnAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    
     activeButton.classList.add("pressed");
     
    setTimeout(function(){
        activeButton.classList.remove("pressed");
     }, 100);
    
 };


for (var i = 0; i < Btns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        charSound(buttonInnerHTML);
        // BUTTON ANIMATION

        btnAnimation(buttonInnerHTML);
});
}


// KEYBOARD PRESS
document.addEventListener("keydown", function(event){
 charSound(event.key);       

 // BUTTON ANIMATION
 btnAnimation(event.key);
});




function charSound(key){
    
    switch (key) {
        case "w":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "j":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        default: console.log(buttonInnerHTML);
    }
};













    // 2OS TROPOS LYSHS

// document.querySelectorAll(".drum").forEach(button => {

//     button.addEventListener('click', function () {
//         alert("CLICKED");
//     })
// });