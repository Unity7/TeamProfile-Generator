const Employee = require("../Employee.js");

const user = {
  name: "John",
  email: "John@me.com",
  id: "1234",
};

test("creates an Employee object", () => {
  const employee = new Employee(user);

  expect(employee.name).toBe("John");
  expect(employee.email).toBe("John@me.com");
  expect(employee.id).toBe("1234");
});
