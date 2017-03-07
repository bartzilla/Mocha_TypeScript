import * as voting from '../controllers/voting';
import { expect } from 'chai';
import 'mocha'

describe('my app tests', () => {
    it('should be able to init app', () => {
        // Arrange
        var options = ['Awesome', 'Ok', 'Bad'];

        // Act
        voting.init(options);

        // Assert
        expect(voting.getTotalVotes()).to.be.equal(0);
    });
});
