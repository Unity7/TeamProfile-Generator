const inquirer = require("inquirer");
const { writeFile, copyFile } = require("./lib/generate-site");

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
  inquirer.prompt(questions).then((response) => {
    const manager = {};
    manager.name = response.name;
    manager.email = response.email;
    manager.id = response.id;
    manager.office = response.office;
    managerArray.push(manager);
  });
  //return an object and push object into managerArray
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

//function to prompt inqurier to ask engineerQuestions
function generateHTML(manager, engineer, intern) {
  //user inquirier to prompt questions
  //return an object and push object into internArray
}

// -------------------------- MAIN FLOW SECTION-------------------------- //

//prompt user to enter manager information
askManagerQuestions(managerQuestions);
//prompt user to enter engineer information
//   .then(askEngineerQuestions(engineerQuestions))

//prompt user to enter intern information
//   .then(askInternQuestions(internQuestions))

//generate HTML string using Employee type arrays
//   .then((fullCompanyInfo) => {
//     return generateHTML(managerArray, engineerArray, internArray);
//   })

//use the returned HTML string to write the html file into dist director
//   .then((htmlResponse) => {
//     return writeFile(htmlResponse);
//   })

//copy the css file into the dist directory in style to index.html file
//   .then((writeFileResponse) => {
//     return copyFile();
//   });
//prompt user to enter intern information
