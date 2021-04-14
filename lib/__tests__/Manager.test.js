const Manager = require("../Manager.js");
const user = {
  name: "John",
  email: "John@me.com",
  id: "1234",
  office: "CA101",
};
test("creates an Manager object", () => {
  const manager = new Manager(user);

  expect(manager.name).toBe("John");
  expect(manager.email).toBe("John@me.com");
  expect(manager.id).toBe("1234");
  expect(manager.office).toBe("CA101");
});
