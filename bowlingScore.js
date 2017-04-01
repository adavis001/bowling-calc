/*js esversion: 6*/

var bowlingScore = function(arr){
	var score = 0;


	for(i=0; i<arr.length; i++){
	if (i< 8 && arr[i].b1 <9 && (arr[i].b1 + arr[i].b2 === 10)){
			// if(arr[i] === arr[9]){
			// 	score += arr[i].b1 + arr[i].b2 + arr[i].b3;
			// }
		//score += arr[i].b1 + arr[i].b2;
		//console.log("Spare");
		//console.log(score);
		score += (arr[i+1].b1);
	} 
	if (i< 8 && arr[i].b1 === 10 && arr[i].b2 === 0){
		//console.log("Strike!!");
		score+=(arr[i+1].b1);
		score+=(arr[i+1].b2);
		// console.log(score);
	//} 
	// if(arr[i]===arr[9]){
	// 	score += arr[i].b1 + arr[i].b2 + arr[i].b3;
	}
	if (i === 9) {
		console.log(score);
		score+= arr[9].b3;
	}
		score += arr[i].b1 + arr[i].b2;
		console.log("Frame" + (i+1));
}
	return score;
};


module.exports = bowlingScore;

