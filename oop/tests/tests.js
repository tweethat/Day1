(function(){
  'use strict';

  var chai = require('jasmine');

  var myApp = require('../app/library.js');

  describe("person Class", function() {

    it("The person should be a type of `object`, and an instance of the `person` class", function() {
      var father = new myApp.person('John');
      expect(typeof father).toEqual(typeof {});
      expect(father instanceof person).toBeTruthy();
    });

    it("The person should be called 'Human' if no name is passed as a parameter", function() {
      var human = new myApp.person('Human', 'Being');
      expect(human.firstName).toEqual('Human');
      expect(human.lastName).toBe('Being');
    });

    it("The person firstName and lastName should be a property of the person", function() {
      var mother  = new myApp.person('Jane', 'Smith');
      expect(mother.firstName).toBe('Jane');
      expect(mother.lastName).toBe('Smith');
    });

    it("The person should have an eye color ", function() {
      var father  = new myApp.person('John','Smith',24,'blue');
      expect(father.eyeColor).toBe('blue');

    });

      
    it("The person should have two (2) legs ", function() {
      var man  = new myApp.person('MAN','',30,'brown',2);
      expect(man.age).toBe(30);
      expect(man.numOfLegs).toBe(2);

     });

    it("The Trailer should have speed 0 km/h until you put `the pedal to the metal`", function() {
      var employee  = new myApp.person('Captain', 'Hook', 40);
      expect(man.age).toBe(40);
      
    });

    it("The person drive function should return the instance of the person class", function() {
      var manager  = new myApp.employee('Executive', 'Director', '57');
      expect(manager.eyeColor).toBe(employee.eyeColor);
    });

    it("The person drive function should return the instance of the person class", function() {
      //var manager  = new myApp.employee('Executive', 'Director', '57');
      expect(manager.fullname).toBe('Executive Director');
    });

  });
})();