import bcrypt from "bcryptjs";

const users = [
  {
    name: "user 1",
    email: "user1@testingus.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "user 2",
    email: "user2@testingus.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "user 3",
    email: "user3@testingus.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "user 4",
    email: "user4@testingus.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
