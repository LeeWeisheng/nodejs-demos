const fs = require("fs");
const path = require("path");

const stdout = fs.createWriteStream(
  path.resolve(__dirname, "./05-custom-console-stdout.log")
);
const stderr = fs.createWriteStream(
  path.resolve(__dirname, "./05-custom-console-stderr.log")
);

const logger = new console.Console(stdout, stderr);

logger.log("test out");
logger.error(new Error("test error"));
