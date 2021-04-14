const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(obj) {
    super(obj);
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
  }
}

module.exports = Engineer;
