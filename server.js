// 1. dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  });


require("dotenv").config();

// import users model
const register = require("./models/AgentRegister");

// 2. instantiations
const app = express();
const PORT = 3700;

//  import routes

const registerRoutes = require("./routes/registerRoutes");
const agentRoutes = require("./routes/agentRoutes");

// 3. configurations
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// set view engine to pug
app.set("view engine", "pug"); // specify the view engine
app.set("views", path.join(__dirname, "views"));

// 4. middleware
// it specifies a folder for static files
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })); // this helps to parse data from the form

// express session configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

// // passport configs
passport.use(AgentRegister.createStrategy());
passport.serializeUser(AgentRegister.serializeUser());
passport.deserializeUser(AgentRegister.deserializeUser());



// 5. routes
// using imported routes
app.use("/register", registerRoutes);

app.use("/agent", agentRoutes);

// 6. bootsrapping the server
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
