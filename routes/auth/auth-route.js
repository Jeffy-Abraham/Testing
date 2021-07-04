var express = require("express");
var router = express.Router();
var User = require("../../models/user.model");
var UserProfile = require("../../models/user-profile.model");
router.post("/", function (req, res) {
  const { username, password, email } = req.body;
  const user = new User({
    username: username,
    password: password,
    email: email,
  });
  //create the user with username and passwordz
  user
    .save()
    .then(function (response) {
      const { username, email, _id } = response;
      //after sucessful creation send userProfile data as response
      const userProfile = new UserProfile({
        username: username,
        email: email,
        userid: _id.toString(),
        account_age: "new",
      });
      userProfile
        .save()
        .then(function (response) {
          res.send(response);
        })
        .catch(function (error) {
          res.send(error);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
