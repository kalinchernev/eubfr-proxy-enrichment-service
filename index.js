require("dotenv").config();
const express = require("express");
const proxy = require("express-http-proxy");

const { PORT, SERVICE } = process.env;

const app = express();

const param = {
  proxyReqPathResolver(req) {
    // Let it work. Return original request path.
    return req.url;

    // Make it fail. Enforce specific code for http://httpstat.us/
    // return "/500";
  }
};

// Let it work.
app.get("/*", proxy(SERVICE, param));

// Make it fail.
// app.get("/*", proxy("http://httpstat.us", param));

app.listen(PORT, () => console.log(`Enrichment service proxy at ${PORT}`));
