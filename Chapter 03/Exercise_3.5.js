// Object declaration for people with an empty array friends
const people = { friends: [] };

// Object declarations for three friends
const friend1 = { first: "Pieter", last: "Mare", id: 1 };
const friend2 = { first: "Jane", last: "Doe", id: 2 };
const friend3 = { first: "John", last: "Doe", id: 3 };

// Pushing the friend objects into the friends array within the people object
people.friends.push(friend1, friend2, friend3);

// Logging the people object, including the friends array
console.log(people);
