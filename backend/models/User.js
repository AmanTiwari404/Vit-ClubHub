import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "student"],
    default: "student",
  },
  club: {
    type: String, // only for admin
    required: function () {
      return this.role === "admin";
    }
  }
});

const User = mongoose.model("User", userSchema);

export default User;
