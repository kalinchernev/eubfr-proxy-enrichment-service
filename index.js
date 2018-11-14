require("dotenv").config();
const express = require("express");
const proxy = require("express-http-proxy");

const { PORT, SERVICE } = process.env;

const app = express();

const coinToss = () => Math.random() > 0.5;

// Depends on luck.
// const getHost = () => (coinToss() ? "http://httpstat.us" : SERVICE);

// Always fails.
const getHost = () => SERVICE;

app.get(
  "/*",
  proxy(getHost, {
    memoizeHost: false,
    proxyReqPathResolver(req) {
      // return "/500";
      return req.url;
    }
  })
);

app.listen(PORT, () => console.log(`Enrichment service proxy at ${PORT}`));
