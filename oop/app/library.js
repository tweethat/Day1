'use strict'

module.exports = {






	person: function (first, last, age, eye, legs) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.numoflegs = legs;
    this.fullName = function () {
    	return "this.firstName" + " " + "this.lastName";
    }

    }

   
}