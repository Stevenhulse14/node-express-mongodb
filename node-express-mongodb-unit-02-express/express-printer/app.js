// this is be where I set up my server //
const express = require("express");
const logger = require("morgan");

const PORT = 8080;

const app = express();

//middleware
// to read incoming json data
app.use(express.json());
// morgan logger middleware
app.use(logger("dev"));
// sending out json data
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./api"));
app.use("/auth", require("./api/auth/index"));

app.listen(PORT, () => {
  console.log(`Your port is running on PORT: ${PORT}  (ink, printer)`);
});

/**
 * express-printer
 * |
 * |--data(folder)
 *   |-ink-data.js
 *   |-printer-data.js
 * |--api(folder)
 *   |-index.js
 *   |-- routes(folder)
 *       |-- auth(folder)
 *         |- auth.js
 *       |- index.js
 *       |- printer-route.js
 *       |- ink-route.js
 *
 * |--node modules (folder)
 * |-app.js
 * |-package-locking.json
 * |-package.json
 * |-README.md
 *
 */
