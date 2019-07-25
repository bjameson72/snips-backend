const express = require("express");
const router = require("./routes");
const logger = require("./middleware/logger");

const app = express();

/* Middleware */
app.use(express.json()); // parses requests with JSON payloads
app.use(logger);
app.use(router);

// Server message
app.listen(5000, () => {
  console.log("Snips server running on port 5000");
});
