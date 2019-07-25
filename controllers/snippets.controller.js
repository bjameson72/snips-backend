const Snippet = require("../models/Snippet.model");

exports.createSnippet = async (request, response) => {
  const snippet = await Snippet.insert(request.body);
  response.status(201).send(snippet);
};

exports.getSnippet = async (request, response) => {
  // Get data from Snippets model
  const snippets = await Snippet.select();
  // Send that out (return for the safety of no code running after response sent)
  return response.send(snippets);
};
