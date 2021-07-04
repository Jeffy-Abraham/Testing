var express = require("express");
var router = express.Router();
var User = require("../../models/user.model");
var UserProfile = require("../../models/user-profile.model");
router.post("/", function (req, res) {
  const { password, email } = req.body;
  console.log(email);
  User.findOne({ email: email }, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      if (user === null) {
        res.sendStatus('404')
      } else {
        if (user.password === password) {
          UserProfile.findOne({ userid: user._id }, function (err, userDetail) {
            if (userDetail.account_age === "new") {
              console.log('new acc')
            
              var newvalues = { $set: { account_age:'old'} };
              UserProfile.updateOne({ userid: user._id },newvalues,function(err,res)
              {
               res.send(userDetail)
              });
            }
            res.send(userDetail);
          });
        } else {
         
       
          res.sendStatus('404')
        }
      }
    }
  });
});

module.exports = router;
