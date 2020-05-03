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
        type: "editor",
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
        type: "rawlist",
        name: "license",
        default: "MIT license",
        choices: ['Apache License 2.0',
          'BSD 3-Clause "New" or "Revised" license',
          'BSD 2-Clause "Simplified" or "FreeBSD" license',
          'GNU General Public License (GPL)',
          'GNU Library or "Lesser" General Public License (LGPL)',
          'MIT license',
          'Mozilla Public License 2.0',
          'Common Development and Distribution License',
          'Eclipse Public License version 2.0]'
        ]},
      {
        type: "input",
        message: "Please enter contributing info (optional)",
        name: "contributing",
      },
    ]);

    const userInfo = await api.getUser(questions.username);
    questions.email = userInfo.email;
    questions.profilePic = userInfo.avatar_url;
    const answers = generateMarkdown(questions);
    fs.writeFile(filename, answers, function () {
      console.log("Successfully generated README.md file!");
    });
  } catch (err) {
    console.log(err);
  }
}

init();

// api.getUser('86Hemphill');
