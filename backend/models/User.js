const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);

exports.User = user;
// exports.validate = validateUser;
