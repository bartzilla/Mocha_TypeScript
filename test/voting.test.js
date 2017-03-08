"use strict";
exports.__esModule = true;
var voting = require("../controllers/voting");
var chai_1 = require("chai");
require("mocha");
describe('My app tests', function () {
    it('should be able to init app', function () {
        // Arrange
        var options = ['Awesome', 'Ok', 'Bad'];
        // Act
        voting.init(options);
        // Assert
        chai_1.expect(voting.getTotalVotes()).to.be.equal(0);
    });
});
describe('Voting app', function () {
    // Arrange
    beforeEach(function () {
        var options = ['Awesome', 'Ok', 'Bad'];
        voting.init(options);
    });
    it('should be able to vote', function () {
        // Act
        voting.vote(0);
        // Assert
        chai_1.expect(voting.getTotalVotes()).equals(1);
    });
    it('should be able to vote', function () {
        // Act
        voting.vote(0);
        // Assert
        chai_1.expect(voting.getVotes()[0].votes).equals(1);
        chai_1.expect(voting.getVotes()[1].votes).equals(0);
        chai_1.expect(voting.getVotes()[2].votes).equals(0);
    });
});
//# sourceMappingURL=voting.test.js.map