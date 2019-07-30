const Snippet = require("../models/Snippet.model");

exports.createSnippet = async (request, response) => {
  console.log("hello");
  const snippet = await Snippet.insert(request.body);
  response.status(201).send(snippet);
};

exports.getSnippet = async (request, response) => {
  // Get data from Snippets model
  const snippets = await Snippet.select();
  // Send that out (return for the safety of no code running after response sent)
  return response.send(snippets);
};

exports.getSnippetByID = async (request, response) => {
  try {
    const { id } = request.params;
    // get the data: call Snippet.select passing an id from request.params
    const snipper = await Snippet.select({ id });
    if (snipper.length === 0) {
      throw new Error("Invalid ID");
    }
    // send that snippet back
    return response.send(snipper[0]);
  } catch (err) {
    throw err;
  }
};
