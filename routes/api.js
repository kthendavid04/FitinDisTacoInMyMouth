const router = require("express").Router();
const Transaction = require("../models/tracker.js");

router.post("/api/tracker", ({ body }, res) => {
  Tracker.create(body)
    .then(dbTracker => {
      res.json(dbTracker);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/tracker/bulk", ({ body }, res) => {
  Tracker.insertMany(body)
    .then(dbTracker => {
      res.json(dbTracker);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/tracker", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTracker => {
      res.json(dbTracker);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;