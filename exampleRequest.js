require("dotenv").config();
const request = require("request-promise-native");

(async () => {
  const { SERVICE } = process.env;

  try {
    // Verify a given service is available at the moment.
    await request.get({ url: SERVICE });

    // If no errors caught, then logic can continue on here ...
  } catch (e) {
    // If this part of the code is reached, then you know handler will fail.
    // Return callback, throw or something else to force fail lambda.
    // Returning a console.error or information as here does not force fail lambda.
    // And we don't need to have a callback to illustrate the point.
    return console.error(e);
  }
})();
