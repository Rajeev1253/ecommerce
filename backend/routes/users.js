// const {
//   registerController,
//   loginController,
//   testController,
// } = require("../controller/authController");
// import { requireSignIn } from "../middleware/authmiddleware";
const { User } = require("../models/User");
const express = require("express");
const router = express.Router();

router.post("/signup", async (req, res) => {
  // First Validate The Request
  // const { error } = validate(req.body);
  // if (error) {
  //     return res.status(400).send(error.details[0].message);
  // }

  // Check if this user already exisits
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("That user already exisits!");
  } else {
    // Insert the new user if they do not exist yet
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    return res.status(201).json(user);
  }
});
// // router.post("/register", registerController);
// // router.post("/login", loginController);
// router.get("/test",isAdmin, requireSignIn, testController);
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email: email });
  if (!user)
    return res.status(404).json({ message: "user doesn't exists!!!!!" });

  if (password === user.password) {
    return res.send({ message: "login sucess", user: user });
  } else {
    return res.send({ message: "wrong credentials" });
  }

  return res.status(200).json("Login api");
  // }
});

module.exports = router;
