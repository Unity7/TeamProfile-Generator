const Intern = require("../Intern.js");

const user = {
  name: "John",
  email: "John@me.com",
  id: "1234",
  school: "UCLA",
};
test("creates an Intern object", () => {
  const intern = new Intern(user);

  expect(intern.name).toBe("John");
  expect(intern.email).toBe("John@me.com");
  expect(intern.id).toBe("1234");
  expect(intern.school).toBe("UCLA");
});
