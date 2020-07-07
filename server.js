var express = require("express");
// var path = require("path");
// var friends = require("./app/data/friends.js");

var app = express();
var PORT = 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/api/friends", function (req, res) {
//     return res.json(friends);
// });

// app.post("/api/friends", function (req, res) {

//     var newFriend = req.body;

//     console.log(newFriend);



//     var resultArr = [];

//     for (var i = 0; i < friends.length; i++) {
//         var totalDifference = 0;
//         for (var s = 0; s < friends[i].scores.length; s++) {
//             var difference = Math.abs(friends[i].scores[s] - newFriend.scores[s]);
//             totalDifference += difference;

//         };

//         resultArr.push(totalDifference);
//     };

//     console.log("result Array: " + resultArr);

//     var bestMatchIndex = 0;
//     var bestMatchValue = resultArr[0];
//     for (var i = 1; i < resultArr.length; i++) {
//         if (resultArr[i] < bestMatchValue) {
//             bestMatchValue = resultArr[i];
//             bestMatchIndex = i;
//         }

//         // add else if for case where resultArr[i]===bestMatchValue. push to tied array and randomly choose an option
//     };

//     // friends.push(newFriend);

//     res.json(friends[bestMatchIndex]);
// });

// app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
// });

// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
// });

require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});