// 1) Write an Array in JS of your favorite animals
let myFavoriteAnimals = [
    "dog", 
    "cat", 
    "rabbit", 
    "hamster",
    "parrot",
    "shark",
    "sheep"
];

console.log("\n--- Animal Sounds ---\n");

for (let animal of myFavoriteAnimals){
    let animalSound;
    if (animal == "dog") {
        animalSound = "woof";
    } else if (animal == "cat"){
        animalSound = "meow!";
    } else if (animal == "rabbit"){
        animalSound = "thump!";
    } else if (animal == "hamster"){
        animalSound = "squeak!";
    } else if (animal == "parrot"){
        animalSound = "squawk!";
    } else if (animal == "shark"){
        animalSound = "dunununu";
    } else if (animal == "sheep"){
        animalSound = "BAAAAAAA";
    }
    console.log(animal + " sounds like : "+animalSound);
}
