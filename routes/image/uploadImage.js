var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
var Post = require("../../models/post.model");
var Post = require("../../models/post.model");
const mongoose = require("mongoose");
var multer = require("multer");
const AWS = require("aws-sdk");
var upload = multer({ dest: "postImage/" }).single("file");
var fs = require("fs");


var s3 = new AWS.S3();

router.post("/", function (req, res, next) {
  upload(req, res, function (err) {
   

    var filePath = "postImage/" + req.file.filename;
    var params = {
      Bucket: "instaclonenode",
      Body: fs.createReadStream(filePath),
      Key: "Images/" + path.basename(filePath) + ".jpg",
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log();
      }
      if (data) {
        const post = new Post({
          PostID: new mongoose.Types.ObjectId(),
          creation: "22 May",
          email: "jeffyab@gmail.com",
          postImageLink: data.Location,
          owneruserid: "60a2a3dcdab1e1296ca1b083",
          totalLikes: 0,
          likes: [{ userID: "", userName: "" }],
          Title: "Such a sad life I have got",
        });
        post
          .save()
          .then(function (response) {
            res.send(response);
            console.log('res')
          })
          .catch(function (error) {
            res.send(error);
          });
      }
    });
  });
 
});

router.get("/",function(req,res)
{
    
})

module.exports = router;
