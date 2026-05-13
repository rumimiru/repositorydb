const express = require("express");
const router = express.Router();

// Success route
router.get("/success", (req, res) => {
  res.json({
    success: true,
    message: "Everything is working!",
  });
});

// Error route
router.get("/error", (req, res, next) => {
  const err = new Error("Custom route error!");

  // Add custom properties
  err.status = 400; // Bad Request
  err.type = "CUSTOM_ERROR"; // optional (for debugging or frontend)

  next(err); // send to middleware
});

module.exports = router;