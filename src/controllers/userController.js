const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try {                                               // add
    let data = req.body;
    if (Object.keys(data).length != 0) {                  //add
      let savedData = await userModel.create(data);
      // console.log(abcd.newAtribute);
      res.status(201).send({ msg: savedData });      // (201) = {request has succeeded and has led to the creation of a resource}
    }

    else {
      res.status(400).send({ msg: "Bad Request" })      // (400) = {the server cannot or will not process the request due to something that is perceived to be a client error}
    }
  }
  catch (err) {                                                                                    //add
    console.log("Error Found:", err.message)                                                    //add
    res.status(500).send({ msg: "error found", error: err.message })  // (500) = {Internal server error that prevents it from fullfilling  the request}                          //add
  }
};


const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    if (Object.keys(userName).length != 0  && Object.keys(password).length != 0) {
      let user = await userModel.findOne({ emailId: userName, password: password });
      if (!user)
        return res.status(403).send({           // (403) = {meaning access to the requested resource which is forbidden for some reason }
          status: false,
          msg: "username or the password is not corerct",
        });

      // Once the login is successful, create the jwt token with sign function
      // Sign function has 2 inputs:
      // Input 1 is the payload or the object containing data to be set in token
      // The decision about what data to put in token depends on the business requirement
      // Input 2 is the secret
      // The same secret will be used to decode tokens
      let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "uranium",
          organisation: "FUnctionUp",
        },
        "functionup-uranium"
      );
      res.setHeader("x-auth-token", token);
      res.status(204).send({ status: true, data: token });    // (204) = { indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page.}
    }
    else {
      res.status(400).send({ msg: "Bad Request" })       // (400) = {the server cannot or will not process the request due to something that is perceived to be a client error }
    }
  }
  catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: "Error", Error: err.message })  // (500) = {Internal server error that prevents it from fullfilling  the request}
  }
};


const getUserData = async function (req, res) {
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  // if (!token) return res.send({ status: false, msg: "token must be present" });

  // console.log(token);

  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // // // Check the value of the decoded token yourself
  // let decodedToken = jwt.verify(token, "functionup-uranium");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(401).send({ status: false, msg: "No such user exists" });  // (401) = {the client request has not been completed because it lacks valid authentication credentials for the requested resource}

    res.status(201).send({ status: true, data: userDetails });
  }
  catch (err) {
    console.log("error")
    res.status(500).send({ msg: "error", error: err.message })
  }
};

const updateUser = async function (req, res) {
  // // // Do the same steps here:
  // let token = req.headers["x-auth-token"]
  // if (!token) return res.send("token must be pesent")
  // let decodedToken = jwt.verify(token, "functionup-uranium")
  // if (!decodedToken) return res.send("Valid Token must be present")
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.send("No such user exists");
    }

    let userData = req.body;
    if (Object.keys(userData).length != 0) {
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
      res.status(200).send({ status: updatedUser, data: updatedUser });
    }
    else {
      res.status(400).send({ msg: "Bad Request" })
    }
  }
  catch (err) {
    console.log("error","err.message")
    res.status(500).send({msg : 'error', error : err.message})
  }
}



  const deleteUser = async function (req, res) {
    // let data = req.params.userId
    // let token = req.headers["x-auth-token"]
    // // if (!token) return res.send(" token should be present")
    // let decodedToken = jwt.verify(token, "functionup-uranium")
    // if (!decodedToken) return res.send(" vali Token must be present")
    try {
      let userId = req.params.userId
      let user = await userModel.findById(userId)
      if (!user) {
        return res.status(401).send({ status: false, msg: "invalid user" })
      }
      let userDelete = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
      res.status(204).send({ status: true, data: userDelete })
    }
    catch (err) {
      console.log('error', err.message)
      res.send(500).send({ msg: "error", error: err.message })
    }
  };

  module.exports.createUser = createUser;
  module.exports.getUserData = getUserData;
  module.exports.updateUser = updateUser;
  module.exports.loginUser = loginUser;
  module.exports.deleteUser = deleteUser;
