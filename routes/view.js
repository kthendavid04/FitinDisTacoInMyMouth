//const router = require("express").Router();
//const Transaction = require("../models/tracker.js");
const path = require('path');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  app.get('/topic', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });
  app.get('/favorites', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });
};

