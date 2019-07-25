const express = require("express");

const router = express.Router();
const snippets = require("./controllers/snippets.controller");
const Snippet = require("./models/Snippet.model");

router.get("/", (request, response) => {
  response.send("Welcome to snips ya animal");
});

router.get("/api", (request, response) => {
  response.send("Welcome to the snips API ya savage");
});

/* Snippets routes */
router.post("/api/snippets", snippets.createSnippet);
router.get("/api/snippets", snippets.getSnippet);
router.get("/api/snippets/:id", (request, response) => {});
router.patch("/api/snippets/:id", (request, response) => {});
router.delete("/api/snippets/:id", (request, response) => {});

module.exports = router;
