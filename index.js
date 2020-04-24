const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const helmet = require("helmet");
const compression = require("compression");

const AuthRoute = require("./routes/AuthRoute");
const passport = require("./services/passport");

const { URI, SECRET } = require("./config");

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;

let nextApp = next({ dev });
let handle = nextApp.getRequestHandler();

let app;

nextApp.prepare().then(() => {
  app = express();

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

  app.get("*", (req, res) => handle(req, res));

  mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to mongo database"))
    .catch((error) => console.error(error));

  app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
});
