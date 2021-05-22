const { TestScheduler } = require("@jest/core");
const inquirer = require("inquirer");
const { writeFile, copyFile } = require("./lib/generate-site");
const templateData = require("./lib/template.js");

var cardsOutput = "";
var html = "";
const mainQuestion = {
  type: "list",
  name: "employee",
  message: "Select employee to add.",
  choices: ["Engineer", "Intern", "Done..."],
};
//Manager Questions: name | id | email | office
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your first and last name?",
    validate: nameInput => {
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
    validate: nameInput => {
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
    validate: nameInput => {
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
    validate: nameInput => {
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
    validate: nameInput => {
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
    validate: nameInput => {
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
    validate: nameInput => {
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
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your employee's GitHub username!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "addAnother",
    message: "Would you like to enter another employee?",
    default: false,
  },
];

//Intern Questions: name | id | email | School
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your intern's first and last name?",
    validate: nameInput => {
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
    validate: nameInput => {
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
    validate: nameInput => {
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
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your intern's school!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "addAnother",
    message: "Would you like to enter another employee?",
    default: false,
  },
];

//array to store the objects for each instance of an array. Function managerAsk to add object to this array
const managerArray = [];
const internArray = [];
const engineerArray = [];

//function to set answers question to object to be pushed into array
function answerQuestions(response) {
  //create manager object to store input
  var obj = {};

  //loop through reponse to store response into manager object
  for (var prop in response) {
    obj[prop] = response[prop];
  }

  if (obj.office) {
    managerArray.push(obj);
  } else if (obj.username) {
    engineerArray.push(obj);
  } else if (obj.school) {
    internArray.push(obj);
  }

  //push manager object into managerArray
}

function askQ(data) {
  return inquirer.prompt(data);
}

const askManager = () => {
  return inquirer.prompt(managerQuestions);
};

function askIntern(questions) {
  askQ(questions).then(answers => {
    if (answers.addAnother) {
      answerQuestions(answers);
      return askIntern(questions);
    } else {
      answerQuestions(answers);
      console.log(managerArray, engineerArray, internArray);
      templateData.generateHTML(managerArray, engineerArray, internArray);
    }
  });
}

//function to prompt inqurier to ask managerQuestions
function askEmployeeQuestions(questions) {
  askQ(questions).then(answers => {
    //if user selects "Done..." after creating a manager or employee
    if (answers.employee == "Done...") {
      html = templateData.generateHTML(
        managerArray,
        engineerArray,
        internArray
      );
      copyFile();
      writeFile(html);
      console.log("File created in dist folder");
      //if user selects to create a new Intern employee
    } else if (answers.employee == "Intern") {
      askQ(internQuestions).then(answerChained => {
        if (answerChained.addAnother) {
          answerQuestions(answerChained);
          return askEmployeeQuestions(questions);
        } else {
          //if user selects to "NO"" to creating another employee
          answerQuestions(answerChained);

          html = templateData.generateHTML(
            managerArray,
            engineerArray,
            internArray
          );
          copyFile();
          writeFile(html);
          console.log("File created in dist folder");
        }
      });
      //if user selects to create a new Engineer employee
    } else if (answers.employee == "Engineer") {
      askQ(engineerQuestions).then(answerChainedEng => {
        if (answerChainedEng.addAnother) {
          answerQuestions(answerChainedEng);
          return askEmployeeQuestions(questions);

          //if user selects to "NO"" to creating another employee
        } else {
          answerQuestions(answerChainedEng);

          html = templateData.generateHTML(
            managerArray,
            engineerArray,
            internArray
          );
          copyFile();
          writeFile(html);
          console.log("File created in dist folder");
        }
      });
    }
  });
}

// -------------------------- MAIN FLOW SECTION-------------------------- //

askManager().then(res => {
  answerQuestions(res);
  askEmployeeQuestions(mainQuestion);
});
