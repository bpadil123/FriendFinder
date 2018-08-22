// Requiring friends.js file.
let officeCharacters = require("../app/data/officeCharacters");

//
module.exports = function (app) {
    //Get route with url /api/firends. This will be used to display all possible friends.
    app.get("/api/officeCharacters", function (req, res) {
        return res.json(officeCharacters)
    });

    //Post route to handle incoming survey results and handle combatibility results.
    app.post("/api/officeCharacters", function (req, res) {
        let newUser = req.body;
        console.log("New friend data: " + newUser);
        let goodMatch;
        let matchDifference = Infinity;
        //Getting total for friends
        for (let i = 0; i < officeCharacters.length; i++) {
            let userTotal = 0;
            let listTotal = 0;
            for (let j = 0; j < officeCharacters[i].scores.length; j++) {
                listTotal += parseInt(officeCharacters[i].scores[j]);
                userTotal += parseInt(newUser.scores[j]);
                console.log("New Friend Score" + newUser.scores[j]);
            }
            console.log("Friends Total: " + listTotal);
            console.log("new Friend total: " + userTotal);
            let difference = Math.abs(listTotal - userTotal);
            console.log("Difference: " + difference);
            if (difference < matchDifference) {
                goodMatch = officeCharacters[i];
                matchDifference = difference;
            }
        }
        officeCharacters.push(newUser);
        res.json(goodMatch)
        // res.send(goodMatch)
    })
};
