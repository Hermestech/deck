## Description
This program renders a series of English cards based on a deck. The condition to finish running the program is the appearance of the four queens, one queen per figure.

## Context
The project logic is the api call, with a function executed every second. 

Each response is stored in an array, in order to determine if all the cards have been saved or if the four queens have appeared.

Then each card is filtered into its respective suit, and finally sorted in ascending order with the help of a hash map, where **Ace is assigned the lowest value**.
