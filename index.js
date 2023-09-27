import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let clientName;

async function welcome() {
  const title = chalkAnimation.rainbow(
    "Hey, Yash here... Welcome to my terminal Portfolio \n"
  );

  function stop() {
    title.stop();
  }
  setTimeout(stop, 2000);
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
    choices: ["About", "projects", "socials", "contact"],
  });

  return handleMenu(details.menu);
  //   console.log(details.menu);
}

async function handleMenu(combo) {
  const spinner = createSpinner("getting Details...");
  console.log(typeof combo);
  //   await sleep();

  if ("About") {
    spinner.success({
      text: `Heres the Details ${clientName}. That's  About `,
    });
  } else if ("projects") {
    spinner.success({
      text: `Heres the Details ${clientName}. That's  projects `,
    });
  } else if ("socials") {
    spinner.success({
      text: `Heres the Details ${clientName}. That's  socials `,
    });
  } else if ("contact") {
    spinner.success({
      text: `Heres the Details ${clientName}. That's  contact `,
    });
  } else {
    spinner.error({ text: `Heres the Details ${clientName}. ` });
    process.exit(1);
  }
}

// await welcome();
// await askName();
await askMenu();
