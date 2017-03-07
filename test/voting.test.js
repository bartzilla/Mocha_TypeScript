"use strict";
exports.__esModule = true;
var voting = require("../controllers/voting");
var chai_1 = require("chai");
require("mocha");
describe('my app tests', function () {
    it('should be able to init app', function () {
        // Arrange
        var options = ['Awesome', 'Ok', 'Bad'];
        // Act
        voting.init(options);
        // Assert
        chai_1.expect(voting.getTotalVotes()).to.be.equal(0);
    });
});
//# sourceMappingURL=voting.test.js.map