var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;

        var resultArr = [];

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var s = 0; s < friends[i].scores.length; s++) {
                var difference = Math.abs(friends[i].scores[s] - newFriend.scores[s]);
                totalDifference += difference;

            };

            resultArr.push(totalDifference);
        };

        var bestMatchIndex = 0;
        var bestMatchValue = resultArr[0];
        var tiedArr = [0];
        for (var i = 1; i < resultArr.length; i++) {
            if (resultArr[i] < bestMatchValue) {
                bestMatchValue = resultArr[i];
                bestMatchIndex = i;
            } else if (resultArr[i]===bestMatchValue) {
                tiedArr.push(i);
            }

        };

        // Randomly chooses a friend if there is a tie for bestMatchValue
        if (tiedArr.length>1) {
            bestMatchIndex = tiedArr[Math.floor(Math.random() * tiedArr.length)];
        } 

        friends.push(newFriend);

        res.json(friends[bestMatchIndex]);
    });

};