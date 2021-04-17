// const { managerArray, engineerArray, internArray } = require("../app.js");

var cardsOutput = "";
//function to take in the data and generate an HTML
// function generateHTML(manager, engineer, intern) {
//   return `
//     <!-- Engineer Card -->
//     <div class="employee-card">
//       <div class="header-card">Tom</div>
//       <div class="header-card">Engineer</div>
//       <div class="info-card-container">
//         <div class="info-card">ID: 1</div>
//         <div class="info-card">Email: Email@Email.com</div>
//         <div class="info-card">Github Username: Ttrain</div>
//       </div>
//     </div>
//     `;
// }

var mockManager = [
  {
    name: "Rick",
    email: "Rick@me.com",
    id: "123",
    office: "123",
  },
];

var mockEngineer = [
  {
    name: "Rick",
    email: "Rick@me.com",
    id: "123",
    username: "123",
  },
  { name: "Rick", email: "Rick@me.com", id: "123", username: "123" },
];

var mockIntern = [
  {
    name: "Rick",
    email: "Rick@me.com",
    id: "123",
    school: "123",
  },
  { name: "Rick", email: "Rick@me.com", id: "123", school: "123" },
];

function renderCards(manager, engineer, intern) {
  if (manager[0]) {
    let managerHtml = generateCard(manager[0]);
    cardsOutput += managerHtml;
  }
  if (engineer[0]) {
    for (var i = 0; i < engineer.length; i++) {
      let text = generateCard(engineer[i]);
      cardsOutput += text;
    }
  }
  if (intern[0]) {
    for (var i = 0; i < intern.length; i++) {
      let internText = generateCard(intern[i]);
      cardsOutput += internText;
    }
  }
  return cardsOutput;
}

//function to take in the data and generate an HTML
function generateCard(obj) {
  if (obj.office) {
    return `<div class="employee-card">
        <div class="header-card">${obj.name}</div>
        <div class="header-card">Manager</div>
        <div class="info-card-container">
          <div class="info-card">ID: ${obj.id}</div>
          <div class="info-card">Email: ${obj.email}/div>
          <div class="info-card">Office: ${obj.office}</div>
        </div>
      </div>
        `;
  } else if (obj.username) {
    return `<div class="employee-card">
        <div class="header-card">${obj.name}</div>
        <div class="header-card">Engineer</div>
        <div class="info-card-container">
          <div class="info-card">ID: ${obj.id}</div>
          <div class="info-card">Email: ${obj.email}/div>
          <div class="info-card">Github: ${obj.username}</div>
        </div>
      </div>
        `;
  } else if (obj.school) {
    return `<div class="employee-card">
        <div class="header-card">${obj.name}</div>
        <div class="header-card">Intern</div>
        <div class="info-card-container">
          <div class="info-card">ID: ${obj.id}</div>
          <div class="info-card">Email: ${obj.email}/div>
          <div class="info-card">School: ${obj.school}</div>
        </div>
      </div>
        `;
  } else {
    console.log("Error");
  }
}

function renderCardsHtml(manager, engineer, intern) {
  return renderCards(manager, engineer, intern);
}

const generateHTML = (manager, engineer, intern) => {
  // return console.log(manager, engineer, intern, "test");
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
        <header>My Team</header>
        <div class="main-container">
          ${renderCards(manager, engineer, intern)}
          <!-- End of Main Card Container -->
        </div>
      </body>
    </html>
    `;
};

// create the about section
const generateAbout = (aboutText) => {
  if (!aboutText) {
    return "";
  }

  return `
        <section class="my-3" id="about">
          <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
          <p>${aboutText}</p>
        </section>
      `;
};

// module.exports = (templateData) => {
//   // destructure page data by section
//   const { projects, about, ...header } = templateData;

//   return `
//   <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Team Profile</title>
//       <link rel="stylesheet" href="./styles.css" />
//     </head>
//     <body>
//       <header>My Team</header>
//       <div class="main-container">
//         <!-- Manager Card -->
//         ${renderManager()}
//         <!-- Engineer Card -->
//         ${renderEngineer()}
//         <!-- Intern Card -->
//         ${renderIntern()}
//         <!-- End of Main Card Container -->
//       </div>
//     </body>
//   </html>
//   `;
// };
module.exports = { renderCards, renderCardsHtml, generateCard, generateHTML };
