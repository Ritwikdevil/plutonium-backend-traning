const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//1//using try -catch and HTTP status code.
const createUser = async function (req, res) {
  try {
    let data = req.body;
    //edge case if the request body is empty
    if (Object.keys(data).length != 0) {

      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData });

    }
    else res.status(400).send({ msg: "BAD REQUEST" })
  } catch (error) {
    res.status(500).send(error.message)
  }
};

//2//using try -catch and HTTP status code.
const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(404).send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "Plutonium",
        organisation: "FunctionUp",
      },
      "functionup-plutonium-Ritwik-secret-key"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, token: token });
  } catch (error) {
    res.status(500).send(error.message)
  }

}


//3//using try -catch and HTTP status code.
const getUserData = async function (req, res) {
  try {
    let token = req.headers["x-auth-token"];
    console.log(token);
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });

    res.status(201).send({ status: true, data: userDetails });

  } catch (error) {
    res.status(500).send(error.message)
  }

};

//4//using try -catch and HTTP status code.
const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.status(201).send({ status: updatedUser, data: updatedUser });

  } catch (error) {
    res.status(500).send(error.message)

  }

};

//5//using try -catch and HTTP status code.
const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let deletedtedUser = await userModel.findByIdAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
    res.status(201).send({ msg: "done", data: deletedtedUser });

  } catch (error) {
    res.status(500).send(error.message)
  }

};


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
