const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const engines = require('consolidate');
const cors = require('cors');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/mevn-users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  promiseLibrary: require('bluebird')
})
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));

const user = require('./routes/user');
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/users', express.static(path.join(__dirname, 'dist')));
app.use('/user', user);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err)
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error')
});

app.engine('html', engines.mustache);
app.set('view engine', 'html');

module.exports = app;
