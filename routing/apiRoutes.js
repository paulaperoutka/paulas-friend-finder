// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

const friends = require("../data/friends");

module.exports = (app) => {

  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
  	let newSurvey = req.body;
  	
  	let newSurveyScores = newSurvey.scores;
  	let newSurveyArray = [];

  	newSurveyScores.forEach(i => {
  		let score = parseInt(i);
  		newSurveyArray.push(score);
  	});

  	newSurveyScores = newSurveyArray;
  	friends.push(newSurvey);

  	let befriend = compareScores(newSurveyScores);

    res.json(befriend);
  });

  function scoreSum(scores){
  	let totalScore = 0;
  	let scoreArray = scores;
  	scoreArray.forEach(i => {
  		totalScore += parseInt(i);
  	})
  	return totalScore;
  };

  function compareScores(scoreData) {
  	let newSurveyScore = scoreSum(scoreData);

  	let scoreComparison = [];

  	friends.forEach(i => {
  		let friendScore = scoreSum(i.scores);
  		let comparedScore = Math.abs(friendScore - newSurveyScore);
  		scoreComparison.push(comparedScores);
  	});

  	let closestScore = scoreComparison[0];
  	let whichFriend = 0;

  	for (j = 1; j < scoreComparison.length-1; j++) {
  		if (scoreComparison[j] < closestScore) {
  			closestScore = scoreComparison[j];
  			whichFriend = j;
  		};
  	};

  	return friends[whichFriend];
  };
};


    

    
