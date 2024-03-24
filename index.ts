#! /usr/bin/env node
import inquirer from "inquirer";

async function main() {

  const first = await inquirer.prompt({
    "type": "number",
    "name": "number1",
    "message": "Enter the first number : ",
  })

  const second = await inquirer.prompt({
    "type": "number",
    "name": "number2",
    "message": "Enter the second number : ",
  })

  const operation = await inquirer.prompt({
    "type": "list",
    "name": "operaions",
    "message": "Select your operation",
    "choices": ['+', '-', '*', '/']
  })

  let result;
  switch (operation.operaions) {
    case '+':
      result = first.number1 + second.number2;
      break;
    case '-':
      result = first.number1 - second.number2;
      break;
    case '*':
      result = first.number1 * second.number2;
      break;
    case '/':
      if (second.number2 === 0) {
        console.error("Error : Not Devied by Zero");
        result;
      }
      result = first.number1 / second.number2;
      break;
  }
  console.log(result);

}

main();
