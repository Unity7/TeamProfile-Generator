const inquirer = require("inquirer");
const stageCounter = 0;
//Manager Questions: name | id | email | office
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your first and last name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Enter your employee ID",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your employee ID!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "office",
    message: "Enter your office number",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your office number!");
        return false;
      }
    },
  },
];

//Engineer Questions: name | id | email | Github Username
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your engineer's first and last name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter employee's name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Enter your employee's ID",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your employee's ID!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your employee's email address",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your employee's email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "username",
    message: "Enter your employee's GitHub username",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your employee's GitHub username!");
        return false;
      }
    },
  },
];

//Intern Questions: name | id | email | School
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your intern's first and last name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter intern's name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Enter your intern's ID",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your intern's ID!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your intern's email address",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your intern's email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: "Enter your intern's school",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your intern's school!");
        return false;
      }
    },
  },
];

//array to store the objects for each instance of an array. Function managerAsk to add object to this array
const managerArray = [];
const internArray = [];
const engineerArray = [];

//function to prompt inqurier to ask managerQuestions
function askManagerQuestions(questions) {
  //user inquirier to prompt questions
  //return an object and push object into managerArray
  //
}

//function to prompt inqurier to ask engineerQuestions
function askEngineerQuestions(questions) {
  //user inquirier to prompt questions
  //return an object and push object into engineerArray
}

//function to prompt inqurier to ask engineerQuestions
function askInternQuestions(questions) {
  //user inquirier to prompt questions
  //return an object and push object into internArray
}
