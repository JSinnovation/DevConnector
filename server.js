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
mongoose.connect(process.env.MONGODB);
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SECRET,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));
// DB Config
//const db = require('./config/keys').mongoURI;

// Connect to MongoDB
//mongoose.connect(process.env.MONGODB);
//mongoose.Promise = global.Promise; 
//mongoose.connect(process.env.MONGODB);
 // db,
  //{ useNewUrlParser: true } //need this for api support

//.then(() => console.log('MongoDB Connected'))
 // .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize());

// Passport Config 

require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`Server running on port ${port}`)); 
