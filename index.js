import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let clientName;

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

console.log(
  `────────────────────────────────
───────────────██████████───────
──────────────████████████──────
──────────────██────────██──────
──────────────██▄▄▄▄▄▄▄▄▄█──────
──────────────██▀███─███▀█──────
█─────────────▀█────────█▀──────
██──────────────────█───────────
─█──────────────██──────────────
█▄────────────████─██──████
─▄███████████████──██──██████ ──
────█████████████──██──█████████
─────────────████──██─█████──███
──────────────███──██─█████──███
──────────────███─────█████████
──────────────██─────████████▀
────────────────██████████
────────────────██████████
─────────────────████████
──────────────────██████████▄▄
────────────────────█████████▀
─────────────────────████──███
────────────────────▄████▄──██
────────────────────██████───▀
────────────────────▀▄▄▄▄▀`
);

// console.log(`
// __   _____        _
// \\ \\ / / _ \\      | |
//  \\ V / /_\\ \\  ___| |__
//   \\ /|  _  | / __| '_ \\
//   | || | | |_\\__ \\ | | |
//   \\_/\\_| |_(_)___/_| |_|
// `);

async function welcome() {
  const logo = chalkAnimation.rainbow(
    `    __   _____        _
    \\ \\ / / _ \\      | |
     \\ V / /_\\ \\  ___| |__
      \\ /|  _  | / __| '_ \\
      | || | | |_\\__ \\ | | |
      \\_/\\_| |_(_)___/_| |_|`
  );
  await sleep();
  const title = chalkAnimation.glitch(
    "Hey, Am Yash.. Welcome to my terminal Portfolio \n"
  );
  await sleep();
  // title.stop();
}

async function askName() {
  const name = await inquirer.prompt({
    name: "client_name",
    type: "input",
    message: "Enter your name here ->",
  });
  clientName = name.client_name;
  console.log(`hey ${clientName}, Nice to meet you!\n`);
}

async function askMenu() {
  const details = await inquirer.prompt({
    name: "menu",
    type: "list",
    message: "So Stalking me?? hehe",
    choices: ["About", "projects", "socials", "contact", "exit"],
  });

  return handleMenu(details.menu);
  //   console.log(details.menu);
}

async function askMenu2() {
  const details = await inquirer.prompt({
    name: "menu",
    type: "list",
    message: "Sure, Choose one!",
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
    console.log("\n");
    spinner.success({
      text: `Here's the Details ${clientName}\n
==> Hey there! I am Yash a Full Stack Dev from India, an avid technology enthusiast, always fascinated by the latest advancements in the tech world. 👨‍💻 Currently Learing Cloud and Devops. I'm also the Outreach Lead at @GdscBpit and a proud contributor to @cncfnd and @rustDelhi Communities. I enjoy mentoring and collaborating with fellow tech enthusiasts to create a vibrant and innovative community.🚀\n \nIn a world powered by code, I find my sanctuary in Linux, where every command and line of code carries the potential to shape the digital realm.⚡.\nLet's connect, innovate, and embrace the ever-evolving tech landscape together! 🧑‍💻 \n`,
    });
    const reply = await inquirer.prompt({
      name: "replyyy",
      type: "input",
      message: "Want to know more 👾? (yup/nope)",
    });
    if (reply.replyyy == "yup") {
      console.log("----------------------------------------------------");
      askMenu2();
    } else {
      spinner.error({
        text: `you killed me Man! (Now Don't forget to hire me 💀)`,
      });
      process.exit(1);
    }
  } else if (input == "projects") {
    spinner.success({
      text: `Heres the Details ${clientName}. That's  projects `,
    });
    const reply = await inquirer.prompt({
      name: "replyyy",
      type: "input",
      message: "Want to know more 👾 ? (yup/nope)",
    });
    if (reply.replyyy == "yup") {
      console.log("----------------------------------------------------");
      askMenu2();
    } else {
      spinner.error({
        text: `you killed me Man! (Now Don't forget to hire me 💀)`,
      });
      process.exit(1);
    }
  } else if (input == "socials") {
    spinner.success({
      text: `Heres the Details ${clientName}. That's  socials `,
    });
    const reply = await inquirer.prompt({
      name: "replyyy",
      type: "input",
      message: "Want to know more 👾 ? (yup/nope)",
    });
    if (reply.replyyy == "yup") {
      console.log("----------------------------------------------------");
      askMenu2();
    } else {
      spinner.error({
        text: `you killed me Man! (Now Don't forget to hire me 💀)`,
      });
      process.exit(1);
    }
  } else if (input == "contact") {
    spinner.success({
      text: `Heres the Details ${clientName}. That's  contact `,
    });
    const reply = await inquirer.prompt({
      name: "replyyy",
      type: "input",
      message: "Want to know more 👾 ? (yup/nope)",
    });
    if (reply.replyyy == "yup") {
      console.log("----------------------------------------------------");
      askMenu2();
    } else {
      spinner.error({
        text: `you killed me Man! (Now Don't forget to hire me 💀)`,
      });
      process.exit(1);
    }
  } else {
    spinner.error({
      text: `you killed me Man! (Now Don't forget to hire me 💀)`,
    });
    process.exit(1);
  }
}

await welcome();
await askName();
await askMenu();
