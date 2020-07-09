var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;

        console.log(newFriend);

        var resultArr = [];

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var s = 0; s < friends[i].scores.length; s++) {
                var difference = Math.abs(friends[i].scores[s] - newFriend.scores[s]);
                totalDifference += difference;

            };

            resultArr.push(totalDifference);
        };

        console.log("result Array: " + resultArr);

        var bestMatchIndex = 0;
        var bestMatchValue = resultArr[0];
        for (var i = 1; i < resultArr.length; i++) {
            if (resultArr[i] < bestMatchValue) {
                bestMatchValue = resultArr[i];
                bestMatchIndex = i;
            }

            // add else if for case where resultArr[i]===bestMatchValue. push to tied array and randomly choose an option
        };

        friends.push(newFriend);

        res.json(friends[bestMatchIndex]);
    });

};