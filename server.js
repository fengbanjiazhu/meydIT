const app = require("./app");
const mongoose = require("mongoose");

const DATABASE =
  "mongodb+srv://JeffInterview:<password>@meydit.ovqwug0.mongodb.net/?retryWrites=true&w=majority";
const PASSWORD = "5zHF2wiCMFWPgKs7";

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

const DB = DATABASE.replace("<password>", PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log("Fail to connect"));

// Server
const port = 3000;

const server = app.listen(port, () => {
  console.log(`app running on ${port}...`);
});
