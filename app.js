const express = require("express");
const helmet = require("helmet");
const AppErr = require("./utils/appError");

const app = express();

const jobRouter = require("./Route/jobRoute");

// Set security HTTP headers
// app.use(helmet());

app.use(express.json({ limit: "10kb" }));

// route
app.use("/jobs", jobRouter);

// has to in the end of routes
app.all("*", (req, res, next) => {
  next(new AppErr(`Can't find ${req.originalUrl} on this server!`));
});

module.exports = app;
