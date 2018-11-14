require("dotenv").config();
const express = require("express");
const proxy = require("express-http-proxy");

const { PORT, SERVICE } = process.env;

const app = express();

let failure = false;

const introduceFailure = () => {
  failure = !failure;
  return failure;
};

const getHost = () => (introduceFailure() ? "http://httpstat.us/500" : SERVICE);

app.get(
  "/*",
  proxy(getHost, {
    memoizeHost: false
  })
);

app.listen(PORT, () => console.log(`Enrichment service proxy at ${PORT}!`));
