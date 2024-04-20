import inquirer from "inquirer";
import chalk from "chalk";

//displaying the welcome message
console.log(chalk.bold.redBright.bgGreenBright("\n \t\t Welcome to the Rafia-Word Counter "));
console.log("=".repeat(60));

//Declaire a const variable 'answer' and asign it to the result of inquirer prompt()
const answer:{
    sentence : string
}= await inquirer.prompt([
    {
    name: "sentence",
    type: "input",
    message: (chalk.bold.blueBright.bgYellowBright("Enter the sentence to count the words: ")),
  }
]);
//triming the sentence and spliting it into words based on "spaces"
const words = answer.sentence.trim().split(" ");

//print the array of words to the console
console.log("=".repeat(60));
console.log(chalk.bold.yellowBright.bgBlue(`\n ${words}`));
//print the words count of the sentence to the console
console.log(chalk.bold.greenBright.bgMagentaBright("   Sentence Words"));
console.log(chalk.bold.greenBright.bgGray(`\n ${words.length}`));

  
 

