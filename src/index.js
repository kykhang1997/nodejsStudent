const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");

// import path, { dirname } from "path";
// import { fileURLToPath } from "url";
const routes = require("./routes");

const app = express();
const port = 3000;

//static file
app.use(express.static(path.join(__dirname, "assets")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// logger http request
app.use(morgan("tiny"));

// use temple handlebars
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// route
routes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
