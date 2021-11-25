import UserModel from "../models/users.js";
import responder from "./messageResponder.js";
import validationCheck from "./validationCheck.js";

const addUsers = async (req, res) => {
  try {
    console.log(req.body);

    const body = validationCheck(res, req.body);
    if (body) {
      const user = new UserModel(body);
      const result = await user.save();
      responder(res, 200, "success", null, "Registration Successfull !!");
    }
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    res.send("hello");
  } catch (error) {
    console.log(error);
  }
};

export { addUsers, getUsers };
