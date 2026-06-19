//Import prompt library : to support prompting the user !
const prompt = require('prompt-sync')();

//quarter to cents function!
function quartersToCents(quarters) {
  return quarters * 25;
}

//PROGRAM LOOP ! :: `while (true)` runs FOREVER!
while (true) {
    const input = prompt('How many quarters do you have? ')     //Prompt user for #quarters
	if ( input == "exit" ) {                                        //exit case: if user types exit, program finishes.
        break;
    }
    const quarters = Number.parseInt(input, 10);                //Prompt input is always a STRING: so we should turn it back into a number!
	console.log("TOTAL CENTS: "+quartersToCents(quarters));     //OUTPUT the user input quarters to cents
}