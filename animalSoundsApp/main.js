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
    "cat": "./sounds/cat.mp3",
    "dog": "./sounds/dog.wav",
    "rabbit": "./sounds/rabbit.mp3",
    "hamster": "./sounds/hamster.mp3",
    "parrot":"./sounds/parrot.mp3",
    "shark": "./sounds/shark.mp3",
    "sheep": "./sounds/sheep.mp3"
};

//Elements on the screen
const inputPrompt = document.getElementById("inputPrompt");
const input = document.getElementById("animalNameInput");
const button = document.getElementById("submit");
const feedback = document.getElementById("animalSoundFeedback");
const audio = document.getElementById("sound");

//Connect CODE to clicking the `button`
button.addEventListener("click",()=>{
    let userInput = input.value;
    let soundUrl = sounds[userInput];

    audio.src = soundUrl;
    audio.play()
    feedback.textContent = animalSoundsText[userInput];
});

//LOAD on the screen, prompt of animal name choices!
//LOOP through one of the data dictionaries!
    //For now console log.
    //TODO: Actually append to the screen.

for (let animal in sounds){
    inputPrompt.innerHTML += animal+" is an option!\n";
}