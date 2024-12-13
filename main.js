
const path = require('path')
const http = require('http')
const fs = require('fs')

var express = require('express');

var app = express();

const port = process.env.PORT || 5000

app.get('/', function(req, res) {
  res.sendfile('src/regist.html');
});


app.listen(port, () => {
  console.log(`Сервер стартовал на порту ${port}`);
  });






