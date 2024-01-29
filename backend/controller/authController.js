const userModel = require("../models/User");
const hashPassword = require("../helper/authHelper");
const JWT = require("jsonwebtoken");
const comparePassword = require("../helper/authHelper");
export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validation
    if (!name) {
      return res.send({ error: `Name is required` });
    }
    if (!email) {
      return res.send({ error: `Email is required` });
    }
    if (!password) {
      return res.send({ error: `Password is required` });
    }
    //existing user
    const existinguser = await userModel.findone({ email });
    if (existinguser) {
      return res
        .status(200)
        .send({ success: true, message: `Already Registred please login` });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: `User registered Sucessfully`,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `error in registeration `,
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: `Invalid username and password`,
      });
    }
    const user = userModel.findone({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: `Email is not registered`,
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: `Invalid password`,
      });
    }
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: `login sucessfully`,
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Login`,
      error,
    });
  }
};
export const testController = (req, res) => {
  res.send("Protected Route");
};
