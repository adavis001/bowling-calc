/*js esversion: 6*/

var bowlingScore = function(arr){
	var score = 0;
	for(i=0; i<arr.length; i++){
	if (i< 8 && arr[i].b1 <9 && (arr[i].b1 + arr[i].b2 === 10)){
		score += (arr[i+1].b1);
	} 
	if (i< 8 && arr[i].b1 === 10 && arr[i].b2 === 0){
		score+=(arr[i+1].b1);
		score+=(arr[i+1].b2);
	}
	if (i === 9) {
		score+= arr[9].b3;
	}
		score += arr[i].b1 + arr[i].b2;
}
	return score;
};
module.exports = bowlingScore;