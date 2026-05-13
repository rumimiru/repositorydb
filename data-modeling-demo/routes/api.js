const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Task = require("../models/Task");

//
// 🟢 CREATE USER
//
router.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//
// 🟢 CREATE TASK
//
router.post("/task", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//
// 🟢 GET USERS
//
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//
// 🟢 GET TASKS
//
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//
// 🟢 POPULATE TASKS
//
router.get("/tasks/populated", async (req, res) => {
  try {
    const tasks = await Task.find().populate("userId");
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//
// ✏️ UPDATE USER
//
router.put("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//
// ✏️ UPDATE TASK
//
router.put("/task/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//
// 🗑️ DELETE USER
//
router.delete("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//
// 🗑️ DELETE TASK
//
router.delete("/task/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;