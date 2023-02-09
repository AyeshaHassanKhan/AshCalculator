#!usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";


const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);

    })
}

async function welcome(){
 let neonTitle = chalkAnimation.neon('Calculating Data'); //start
await sleep();
neonTitle.stop();
console.log(`_____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
    // console.log(`${neonTitle} is fine`);
}

await welcome();

async function askQuestion(){
   await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"list",
        name:"operator",
        message:"Which calculation you want to perform?\n",
        choices:["Addition","Subtraction","Multiplication","Division"]
    },
    {
        type:"number",
        name:"num1",
        message:"Enter FirstNumber:"

    },
    {
    type:"number",
    name:"num2",
    message:"Enter SecondNumber:"
    }

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    //console.log(answers);
    if(answers.operator== "Addition"){
        console.log(chalk.bgRedBright(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if(answers.operator== "Subtraction"){
   console.log(chalk.bgRedBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
  }
  else if(answers.operator== "Multiplication"){
    console.log(chalk.bgRedBright(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
}
else if(answers.operator== "Division"){
    console.log(chalk.bgRedBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
}
  })
};
//askQuestion();
async function startAgain(){
    do{
        await askQuestion();
        var again = await inquirer

        inquirer
        .prompt({
            type:"input",
            name: "restart",
            message:"Do you wanna do calculation again? Press y or n: "
        })
    }while(again.restart == 'y'|| again.restart == 'Y' || again.restart == 'Yes' || again.restart == 'yes')
}
startAgain();