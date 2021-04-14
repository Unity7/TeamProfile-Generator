const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(obj) {
    super(obj);
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
  }
}

module.exports = Intern;
