const express = require("express");
const app = express();

const demoRoutes = require("./routes/demoRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

// Middleware
app.use(express.json());

// Routes
app.use("/", demoRoutes);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error Middleware (MUST be last)
app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});