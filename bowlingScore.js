/*js esversion: 6*/

var bowlingScore = function(arr){
	var score = 0;
	for(i=0; i<arr.length; i++){
		score += arr[i].b1 + arr[i].b2;
		}

	return score;
};


var framesKaleo = [{b1:8,b2:2},{b1:1, b2:8}];
var framesAlex =  [{b1:2,b2:3},{b1:3, b2:6}];

module.exports = bowlingScore;

console.log(bowlingScore(framesKaleo));