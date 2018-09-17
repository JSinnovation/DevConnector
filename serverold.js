const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();
mongoose.Promise = global.Promise;
var uristring =
  process.env.MONGODB ||
  'mongodb://localhost/HelloMongoose';

/* mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true
      .then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(err.extended))
  }); */
// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));

// Passport middleware
app.use(passport.initialize());

// Passport Config 

require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Preamble
var http = require('http'); // For serving a basic web page.
//var mongoose = require("mongoose"); // The reason for this demo.

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.  
var uristring =
  process.env.MONGODB_URI ||
  'mongodb://localhost/HelloMongoose';
theport = (process.env.PORT || 3000);
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log('Succeeded connected to: ' + uristring);
  }
});


//app.listen(port, () => console.log(`Server running on port ${port}`));