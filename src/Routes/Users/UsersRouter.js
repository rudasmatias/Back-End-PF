const { Router } = require("express");
const usersRouter = Router();
const getAllUsers = require("../../Controllers/Users/getAllUsers");

usersRouter.get("/", getAllUsers);

module.exports = usersRouter;
