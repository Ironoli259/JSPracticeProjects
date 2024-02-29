const nunberOfDrumButtons = document.querySelectorAll(".drum").length;
const audioDrumList = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3", "sounds/snare.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3"];

// Add event listener to all drum buttons
for(let i=0; i<nunberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        drumSwitch(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });
}

// Add event listener to keyboard
addEventListener("keydown", function(event) {
    drumSwitch(event.key);
    buttonAnimation(event.key);
});

// Function to play the drum sound
function drumSwitch (key){
    switch(key) {
        case 'w':
            var audio = new Audio(audioDrumList[0]);
            audio.play();
            break;
        case 'a':
            var audio = new Audio(audioDrumList[1]);
            audio.play();
            break;
        case 's':
            var audio = new Audio(audioDrumList[2]);
            audio.play();
            break;
        case 'd':
            var audio = new Audio(audioDrumList[3]);
            audio.play();
            break;
        case 'j':
            var audio = new Audio(audioDrumList[4]);
            audio.play();
            break;
        case 'k':
            var audio = new Audio(audioDrumList[5]);
            audio.play();
            break;
        case 'l':
            var audio = new Audio(audioDrumList[6]);
            audio.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}