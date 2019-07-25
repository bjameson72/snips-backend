const fs = require("fs");

async function logger(request, response, next) {
  const msg = `Method ${request.method} was ran on ${request.path} at ${Date.now()}\n`;
  await fs.appendFile("./middleware/log.txt", msg, err => {
    if (err) throw err;
    console.log("Message was logged to log.txt");
  });
  next(); // move on to the next piece of middleware
}

module.exports = logger;
