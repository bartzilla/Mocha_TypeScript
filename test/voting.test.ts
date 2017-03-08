import * as voting from '../controllers/voting';
import { expect } from 'chai';
import 'mocha'

describe('My app tests', () => {
    it('should be able to init app', () => {
        // Arrange
        var options = ['Awesome', 'Ok', 'Bad'];

        // Act
        voting.init(options);

        // Assert
        expect(voting.getTotalVotes()).to.be.equal(0);
    });
});

describe('Voting app', () => {
    // Arrange
    beforeEach(() => {
        var options = ['Awesome', 'Ok', 'Bad'];
        voting.init(options);
    });

    it('should be able to vote', () => {
        // Act
        voting.vote(0);

        // Assert
        expect(voting.getTotalVotes()).equals(1);
    });

    it('should be able to vote', () => {
        // Act
        voting.vote(0);

        // Assert
        expect(voting.getVotes()[0].votes).equals(1);
        expect(voting.getVotes()[1].votes).equals(0);
        expect(voting.getVotes()[2].votes).equals(0);

    })
});