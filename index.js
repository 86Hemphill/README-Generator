const api = require("./utils/api.js");
const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

async function init() {
  try {
    const filename = "GeneratedREADME.md";
    const questions = await inquirer.prompt([
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
      },
      {
        type: "input",
        message: "Please enter the name of your repo",
        name: "repoName",
      },
      {
        type: "input",
        message: "What do you want the title of the repo to be?",
        name: "title",
      },
      {
        type: "input",
        message: "Enter a description for your repo",
        name: "description",
      },
      {
        type: "input",
        message: "Please enter installation instructions for your application (optional)",
        name: "installation",
      },
      {
        type: "input",
        message: "Please enter usage protocol for your application (optional)",
        name: "usage",
      },
      {
        type: "input",
        message: "Please enter your license information (optional)",
        name: "license",
      },
      {
        type: "input",
        message: "Please enter contributor info (optional)",
        name: "contributing",
      },
    ]);
    const githubData = await api.getUser(questions.username);
    console.log(githubData);
    // questions.email = githubData.email;
    const answers = generateMarkdown(questions);
    fs.writeFile(filename, answers, function () {
      console.log("Success!");
    });
  } catch (err) {
    console.log(err);
  }
}

init();

// api.getUser('86Hemphill');
