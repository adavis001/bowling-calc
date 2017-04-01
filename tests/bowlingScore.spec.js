/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const bowlingScore = require('../bowlingScore.js');
var framesKaleo = [{b1:8,b2:2},{b1:1, b2:8}];
var framesAlex =  [{b1:2,b2:3},{b1:3, b2:6}];

describe('bowlingScore', ()=> {
	it('should be a function', function(){
		expect(bowlingScore).to.be.a('function');
	});
	it('should return 10 if spare', function(){
		expect(bowlingScore(framesKaleo)).to.be.equal(19);
	});
	it('should return 0 and bonus if fail', function(){
		expect(bowlingScore(0,0)).to.be.equal(0);
	});
});