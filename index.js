const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");

const AuthRoute = require("./routes/AuthRoute");
const ProjectRoute = require("./routes/ProjectRoute");
const passport = require("./services/passport");

const { URI, SECRET } = require("./config");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      url: URI,
      autoRemove: "interval",
      autoRemoveInterval: 10,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", AuthRoute);
app.use("/api/project", ProjectRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("views/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "build", "index.html"));
  });
}

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to mongo database"))
  .catch((error) => console.error(error));

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
