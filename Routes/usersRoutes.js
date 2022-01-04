const express = require("express");
const router = express.Router();
const User = require("../Models/userModal");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const newuser = new User(req.body);
    await newuser.save();
    res.send("User registered successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
