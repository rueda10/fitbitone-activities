var express = require("express");
//var passport = require("passport");
//var FitbitStrategy = require("passport-fitbit-oauth2").FitbitOAuth2Strategy;

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === "https") {
    res.redirect("http://" + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log("Express server is up on port " + PORT);
});
