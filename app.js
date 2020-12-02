const mongoose = require ('mongoose');
const express = require ('express');
const app = express ();
const db = require ('./config/keys').mongoURI;
const bodyParser = require ('body-parser');
const users = require ('./routes/api/users');
const passport = require ('passport');
const posts = require('./routes/api/posts');
const tags = require('./routes/api/tags');

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
