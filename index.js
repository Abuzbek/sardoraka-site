const express = require('express')
const createError = require('http-errors');
const path = require('path')
const logger = require('morgan');
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})
app.get('/about', (req, res) => {
  res.sendFile(__dirname+'/about.html')
})
app.get('/order', (req, res) => {
  res.sendFile(__dirname+'/order.html')
})
app.use(function(req, res, next) {
  next(createError(404));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})