const express = require('express')
const createError = require('http-errors');
const path = require('path')
const logger = require('morgan');
const cors = require('cors')
const app = express()
const port = 3000
const indexRouter = require('./routes/index');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendFile(__dirname + "/error.html");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})