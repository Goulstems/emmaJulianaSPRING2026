//Declarations / Data / Dependencies
let animalSoundsText ={
    "dog": "woof",
    "cat": "meow",
    "rabbit": "thump",
    "hamster": "squeak!",
    "parrot":"squak",
    "shark":"dununununu",
    "sheep":"baaaaaaa!"
};
let sounds = {
    "cat": "https://www.epidemicsound.com/sound-effects/tracks/e73a8b9f-ee00-410f-809d-bdf1de200373/",
}

//Elements on the screen
const input = document.getElementById("animalNameInput");
const button = document.getElementById("submit");
const feedback = document.getElementById("animalSoundFeedback");
const audio = document.getElementById("sound");

//Connect CODE to clicking the `button`
button.addEventListener("click",()=>{
    let userInput = input.value;
    audio.src = sounds[userInput];
    audio.play();
    feedback.innerHTML = animalSoundsText[userInput];
});
