var express = require("express");
var path = require("path");
var friends = require("./app/data/friends.js");

var app = express();
var PORT = 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    
    var newFriend = req.body;

    console.log(newFriend);

    

    var resultArr = [];

    for (var i=0;i<friends.length;i++) {
        var difference = Math.abs(friends[i].scores[0] - newFriend.scores[0]);
        resultArr.push(difference);
    };

    console.log(resultArr);

    var bestMatchIndex = 0;
    var bestMatchValue = resultArr[0];
    for (var i=1;i<resultArr.length;i++) {
        if (resultArr[i]<bestMatchValue) {
            bestMatchValue = resultArr[i];
            bestMatchIndex = i;
            console.log("best match " + bestMatchValue + " at index " + bestMatchIndex);
        }
    };

    console.log("best: " + friends[bestMatchIndex]);
    // friends.push(newFriend);

    res.json(friends[bestMatchIndex]);
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});