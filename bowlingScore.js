/*js esversion: 6*/

var bowlingScore = function(arr){
	var score = 0;
	for(i=0; i<=9; i++){
	if (arr[i].b1 <9 && (arr[i].b1 + arr[i].b2 === 10)){
		//score += arr[i].b1 + arr[i].b2;
		console.log("Spare");
		//console.log(score);
		score += (arr[i+1].b1);
	} if (arr[i].b1 === 10 && arr[i].b2 === 0){
		console.log("Strike!!");
		score+=(arr[i+1].b1);
		score+=(arr[i+1].b2);
		score += arr[i].b1 + arr[i].b2;
		// console.log(score);
	} if(arr[i]===arr[9]){
		
	}else {
		score += arr[i].b1 + arr[i].b2;
		// console.log("Spareless");
		// console.log(score);
	}
}
 score += arr[9].b1 +arr[9].b2;
	return score;
};


module.exports = bowlingScore;

