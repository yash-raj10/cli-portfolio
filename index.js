import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let clientName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const title = chalkAnimation.rainbow(
    "Hey, Yash here... Welcome to my terminal Portfolio \n"
  );

  await sleep();
  title.stop();
}

async function askName() {
  const name = await inquirer.prompt({
    name: "client_name",
    type: "input",
    message: "Enter your name here ->",
  });
  clientName = name.client_name;
  console.log(`hey ${clientName}`);
}

async function askMenu() {
  const details = await inquirer.prompt({
    name: "menu",
    type: "list",
    message: "whats you want to know about me ?",
    choices: ["About", "projects", "socials", "contact", "exit"],
  });

  return handleMenu(details.menu);
  //   console.log(details.menu);
}

async function handleMenu(input) {
  const spinner = createSpinner("getting Details...").start();
  // console.log(typeof input);
  // console.log(input);
  await sleep();

  if (input == "About") {
    spinner.success({
      text: `Heres the Details ${clientName}. That's  About `,
    });
    const reply = await inquirer.prompt({
      name: "replyyy",
      type: "input",
      message: "wanted to know more ? (yup/nope)",
    });
    if (reply.replyyy == "yup") {
      askMenu();
    } else {
      spinner.error({ text: `you killed me Man!` });
      process.exit(1);
    }
  } else if (input == "projects") {
    spinner.success({
      text: `Heres the Details ${clientName}. That's  projects `,
    });
    askMenu();
  } else if (input == "socials") {
    spinner.success({
      text: `Heres the Details ${clientName}. That's  socials `,
    });
    askMenu();
  } else if (input == "contact") {
    spinner.success({
      text: `Heres the Details ${clientName}. That's  contact `,
    });
    askMenu();
  } else {
    spinner.error({ text: `you killed me Man!` });
    process.exit(1);
  }
}

// await welcome();
// await askName();
await askMenu();
