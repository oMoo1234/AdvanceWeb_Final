const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const questionRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


questionRoutes.route("/question/add").post( function (req, response) {
    let db_connectt = dbo.getDb();
    let myobjj = {
      question: req.body.question,
      likes: req.body.likes,

    };
    db_connectt.collection("questions").insertOne(myobjj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

  questionRoutes.route("/question").get(function (req, res) {
    let db_connect = dbo.getDb("employees");
    db_connect
      .collection("questions")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  module.exports = questionRoutes;