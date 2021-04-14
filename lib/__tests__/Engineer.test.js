const Engineer = require("../Engineer.js");

const user = {
  name: "John",
  email: "John@me.com",
  id: "1234",
  username: "John10",
};
test("creates an Engineer object", () => {
  const engineer = new Engineer(user);

  expect(engineer.name).toBe("John");
  expect(engineer.email).toBe("John@me.com");
  expect(engineer.id).toBe("1234");
  expect(engineer.username).toBe("John10");
});
