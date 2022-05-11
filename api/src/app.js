const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const v1Router = require('./routes/v1');
const v2Router = require('./routes/v2');

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ limit: '10mb' }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
  next();
});


app.use('/api/v1', v1Router(app));
app.use('/api/v2', v2Router(app));

// error handler
// eslint-disable-next-line
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  console.log(err.message);

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
