'use strict';

 	var chai = require('jasmine');

	var myApp = require('../app/library.js');

describe("Get Prime Numbers tests ", function() {

	describe("Case for some false values", function() {

		it("should return '[]' for null", function() {
			expect(myApp.getPrime(null)).toEqual([]);
		});

		it("should return '[]' for negative integers", function() {
			expect(myApp.getPrime(-7)).toEqual([]);
		});

		it("should return '[]' for 0", function() {
			expect(myApp.getPrime(0)).toEqual([]);
		});

		it("should return '[]' for 1", function() {
			expect(myApp.getPrime(1)).toEqual([]);
		});

		it("should return '[]' for booleans", function() {
			expect(myApp.getPrime(true)).toEqual([]);
		});

	describe("Tests for other situations", function() {

		it("should return [2] for argument 2",function() {
			expect(myApp.getPrime(2)).toEqual([2]);
		});

		it("should return [2,3,5] for argument 6",function() {
			expect(myApp.getPrime(6)).toEqual([2,3,5]);
		});

		it("should return [2,3,5,7] for argument 10",function() {
			expect(myApp.getPrime(10)).toEqual([2,3,5,7]);
		});

		it("should return [2,3,5,7,11,13,17,19] for argument 20",function() {
			expect(myApp.getPrime(20)).toEqual([2,3,5,7,11,13,17,19]);
		});

		it("should return [2,3,5,7,11,13,17,19] for string argument '20'",function() {
			expect(myApp.getPrime('20')).toEqual([2,3,5,7,11,13,17,19]);
		});

	});
});

});