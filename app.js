const mongoose = require ('mongoose');
const express = require ('express');
const app = express ();
const db = require ('./config/keys').mongoURI;
const path = require('path');
const User = require ('./models/User');
const bcrypt = require ('bcryptjs');
const bodyParser = require ('body-parser');
const users = require ('./routes/api/users');
const passport = require ('passport');
const posts = require('./routes/api/posts');
const tags = require('./routes/api/tags');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect (db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then (() => console.log ('Connected to MongoDB successfully'))
  .catch (err => console.log (err));

app.use (bodyParser.urlencoded ({extended: false}));
app.use (bodyParser.json ());

app.use ('/api/users', users);
app.use ('/api/posts', posts);
app.use('/api/tags', tags);

app.use (passport.initialize ());
require ('./config/passport') (passport);

app.get("/",  (req, res) => {
  console.log(res);
  res.send("Hello")
})

const port = process.env.PORT || 5000;

app.listen (port, () => console.log (`Server is running on port ${port}`));
