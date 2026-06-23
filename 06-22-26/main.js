//get button first
//apply click listener

    //click should
        //get input data
            //return animal sound

let animalSounds ={
    "dog": "woof",
    "cat": "meow",
    "rabbit": "thump",
    "hamster": "squeak!",
    "parrot":"squak",
    "shark":"dununununu",
    "sheep":"baaaaaaa!"
};
const input = document.getElementById("animalNameInput");
const button = document.getElementById("submit");
const feedback = document.getElementById("animalSoundFeedback");

button.addEventListener("click",()=>{
    let animal = input.value;
    let animalSound = animalSounds[animal];
    feedback.innerHTML = animalSound;
});
