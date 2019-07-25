const express = require("express");

const router = express.Router();
const Snippet = require("./models/Snippet.model");

router.get("/", (request, response) => {
  response.send("Welcome to snips ya animal");
});

router.get("/api", (request, response) => {
  response.send("Welcome to the snips API ya savage");
});

/* Snippets routes */

// POST /snippets
router.post("/api/snippets", async (request, response) => {
  const snippet = await Snippet.insert(request.body);
  response.send(snippet);
});

// GET /snippets
router.get("/api/snippets", async (request, response) => {
  // Get data from Snippets model
  const snippets = await Snippet.select();
  // Send that out (return for the safety of no code running after response sent)
  return response.send(snippets);
});

// GET /snippets/:id
router.get("/api/snippets/:id", (request, response) => {});

// PATCH /snippets/:id
router.patch("/api/snippets/:id", (request, response) => {});

// DELETE /snippets/:id
router.delete("/api/snippets/:id", (request, response) => {});

module.exports = router;
