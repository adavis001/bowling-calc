/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const bowlingScore = require('../bowlingScore.js');
var framesKaleo = [{b1:8,b2:1},{b1:1, b2:8}, {b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0,b3:0}];
var framesAlex = [{b1:2,b2:8},{b1:3, b2:6}, {b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0,b3:0}];
var framesAndrew = [{b1:10,b2:0},{b1:2, b2:6}, {b1:2,b2:2},{b1:1,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0,b3:0}];
var framesErnest = [{b1:10,b2:0},{b1:3, b2:6}, {b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0,b3:0}];
var framesGagan = [{b1:0,b2:0},{b1:0, b2:0}, {b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0},{b1:0,b2:0,b3:0}];
var framesJasmine =  [{b1:10,b2:0},{b1:3, b2:6},{b1:1, b2:1},{b1:1,b2:1},{b1:1,b2:1},{b1:1,b2:1},{b1:1,b2:1},{b1:1,b2:1},{b1:1,b2:1},{b1:8,b2:2,b3:1}];

describe('bowlingScore', ()=> {
	it('should be a function', function(){
		expect(bowlingScore).to.be.a('function');
	});
	it('should add score if not a spare', function(){
		expect(bowlingScore(framesKaleo)).to.be.equal(18);
	});
	it('should return 0 and bonus if fail', function(){
		expect(bowlingScore(framesGagan)).to.be.equal(0);
	});
	it('should add bonus points for spare', function(){
		expect(bowlingScore(framesAlex)).to.be.equal(22);
	});
	it('should add DOUBLE BONUS points for a strike', function(){
		expect(bowlingScore(framesErnest)).to.be.equal(28);
		expect(bowlingScore(framesAndrew)).to.be.equal(31);
	});
	it('should give frame 10 Two or Three throws', function(){
		expect(bowlingScore(framesJasmine)).to.be.equal(53);
	});
});
	
		// function lastFrame(arr){
		// if(arr[9].b1 <9 && (arr[9].b1 + arr[9].b2 === 10)){
		// 	console.log(arr[9].b1);
		// 	console.log(arr[9].b2);
		// 	console.log(arr[9].b3);
		// 	console.log("Frame 10!");
		// 	score += arr[9].b1 + arr[9].b2 + arr[9].b3;
		// }