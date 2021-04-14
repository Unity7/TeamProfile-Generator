class Employee {
  constructor(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
  }
}

module.exports = Employee;
