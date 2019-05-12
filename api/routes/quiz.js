const path = require('path');
module.exports = {
    getQuestions: function (req, res) {
        console.log("Starting..");
        res.sendFile(path.join(__dirname, '../resources', 'questions&answers.json'));
    },
    evaluate: function(req, res) {
        console.log("Evaluating...");
        var totalScore = 0;
        console.table(req.body);
        var fs = require('fs');
        var filepath = (path.join(__dirname, '../resources', 'q&a&scores.json'));
        var scores = JSON.parse(fs.readFileSync(filepath, 'utf8'));
        console.info(scores);

        for(i = 0; i<scores.length; i++) {
            console.group(i);
            for(answer in scores[i].answers) {
                if(answer == req.body[i]) {
                    console.log(`Getting score... ${req.body[i]} = ${scores[i].answers[answer]}`);
                    totalScore+= scores[i].answers[answer];
                }
            }
            console.groupEnd();
        }
        //Get message for personality score
        console.info("Total score is ", totalScore);
        filepath = (path.join(__dirname, '../resources', 'scorecard.json'));
        var results = JSON.parse(fs.readFileSync(filepath, 'utf8'));
        console.log("Results!\n", results);
        
        for(message in results) {
            console.log("Printing result: ", results[message]);
            if(totalScore>results[message]) {
                console.log(`Gotten result. ${totalScore}>${results[message]}`);
                console.log("Message: \n", message);
                return res.send(message);
            }
        }
    }
}