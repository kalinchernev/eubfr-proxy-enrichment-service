const https = require("https");

const getRequest = params => {
  return new Promise((resolve, reject) => {
    var req = https.request(params, res => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error("statusCode=" + res.statusCode));
      }
      let body = [];
      res.on("data", chunk => {
        body.push(chunk);
      });
      res.on("end", () => {
        try {
          body = JSON.parse(Buffer.concat(body).toString());
        } catch (e) {
          reject(e);
        }
        resolve(body);
      });
    });
    req.on("error", err => {
      reject(err);
    });
    req.end();
  });
};

(async () => {
  const params = {
    host: "sdw-wsrest.ecb.europa.eu",
    method: "GET",
    path: "/service/data/EXR/M.USD.EUR.SP00.A",
    headers: {
      accept: "application/vnd.sdmx.data+json;version=1.0.0-wd"
    }
  };

  try {
    // Verify a given service is available at the moment.
    const results = await getRequest(params);

    console.log(results);

    // If no errors caught, then logic can continue on here ...
  } catch (e) {
    // If this part of the code is reached, then you know handler will fail.
    // Return callback, throw or something else to force fail lambda.
    // Returning a console.error or information as here does not force fail lambda.
    // And we don't need to have a callback to illustrate the point.
    return console.error(e);
  }
})();
