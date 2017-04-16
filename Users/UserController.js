var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended:true
}));

var user = require('./User');

router.post('/', function(req, res) {
  user.create({
    name : req.body.name,
    email: req.body.email,
    password: req.body.password
  },
function(err, user) {
  if(err) {
    return res.status(500).send("Error creating user");
  } else {
    res.status(200).send(user);
  }
});
});

router.get('/', function(req, res) {
  user.find({}, function(err, users) {
    if(err) {
      return res.status(500).send("Error reading users");
    } else {
      res.status(200).send(users);
    }
  });
});

module.exports = router;
