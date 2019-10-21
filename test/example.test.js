// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { findById } from '../utils/utils.js';
import { quests } from '../data/quest-data.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let expected = {
        id: 'convenient-store',
        title: 'Welcom to a strangely quiet convenient store!',
        image: '../assets/convenientstore.jpg',
        // eslint-disable-next-line quotes
        description: 'You walk into a convenient store and are searching for a toilet sign. The clerk is tapping his fingers on the counter waiting for you to approach the counter.',
        choices: [{
            id: 'ask-clerk',
            description: 'Ask the Clerk where the Bathroom is',
            result: "The clerk responds, 'The bathroom is for customers only. So you can either buy something or get out.' You receive no relief and are forced to exit the store as you are super uncomfortable.",
            relief: 0,
            gold: 0
        }, {
            id: 'buy-tums',
            description: 'Buy Tums',
            result: "You search the aisles and buy some Tums thinking that it might provide some relief and purchase them from the clerk. They don't give you any relief because Tums are for indigestion not emergency poops.",
            relief: 0,
            gold: -5
        }]
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(quests, 'convenient-store');
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});
