const session = require("express-session");

const sessionConfig = session({
  secret: process.env.SESSION_SECRET || "mySuperSecretKey@123!",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 2000 } // 1 day session
});

module.exports = sessionConfig;

