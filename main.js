/* FROYO ORDERS

A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
hen they view the browser console, they observe a table listing how many of each flavor they have ordered. 
In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.


If you are feeling stuck, try answering the following questions:

X Can you live serve the HTML file?
X Is the HTML file connected to the JS file?
X Can you prompt the user for froyo flavors and store their result?
X Can you parse the user input into an array of froyo flavors?
X Can you build an object to track which flavors you have observed so far?
As you iterate through the array of flavors, when should that object be updated?
X Is your logic organized into a function?

My pseudocode:

The user sees a prompt pop up on the website
The user enters vanilla,vanilla,vanilla,strawberry,coffee,coffee
  This user generated string is defined as a variable userScoops
  userScoops is changed into an array using userScoops.split(’,’)

    a function with input of scoops, called getTotalScoops gets the total count of each flavor
      let numVanilla = 0;
      let numStrawberry = 0;
      let numCoffee = 0; 
      let numOther = 0;
      for loop that iterates through each index
        if (scoops[i] === 'vanilla') {numVanilla += 1}
        else if (scoops[i] === 'strawberry') {numStrawberry += 1} 
        else if (scoops[i] === 'coffee') {numCoffee += 1} 
        else {numOther += 1}
      return numVanilla, numStrawberry, numCoffee, numOther;

  An object called userOrder is defined with three keys: vanilla, strawberry, and coffee
  The number of scoops (numVanilla, numStrawberry, numCoffee, numOther) are assigned to userOrder's keyvalues
console.table(userOrder) is used to display a table in the console which shows each flavor and a number of scoops per flavor.
*/
// prompt the user to enter a list of comma-separated froyo flavors:
// let userScoops = prompt('Please enter a list of comma-separated froyo flavors', 'vanilla,strawberry,banana,strawberry,coffee');

// // split the user input into an array
// userScoops = userScoops.split(',');

// let numVanilla = 0;
// let numStrawberry = 0;
// let numCoffee = 0; 
// let numOther = 0;
// const getNumEachScoop = (scoops) => {
//   for(let i = 0; i < scoops.length; i++) {
//     if (scoops[i] === 'vanilla') {
//       numVanilla += 1;
//     } else if (scoops[i] === 'strawberry') {
//       numStrawberry += 1;
//     } else if (scoops[i] === 'coffee') {
//       numCoffee += 1;
//     } else {
//       numOther += 1;
//     }
//   }
//   let numScoopObj = {
//     vanilla: numVanilla, 
//     strawberry: numStrawberry, 
//     coffee: numCoffee, 
//     other: numOther,
//   };
//   return numScoopObj;
// }
// console.table(getNumEachScoop(userScoops));


// Jon says this answer is ok, but the keys are hardcoded. I want to make another version where the user can create new flavors.
// Brainstorming:
// How to make the user array called userScoops into an object?
// Want to identify UNIQUE elements in the array?
// use filter() to create a new array filled with elements that pass a test provided by a function?

let userScoops = prompt('Please enter a list of comma-separated froyo flavors', 'vanilla,strawberry,banana,strawberry,coffee');

// split the user input into an array
userScoops = userScoops.split(',');

//names of scoops
// count how many scoops have that name



const getNumEachScoop = (scoops) => {
  // loop through an empty object
  const scoopObj = {};
  for(let i = 0; i < scoops.length; i++) {
    const flavorName = scoops[i];
  // if it exists in the object
    if(scoopObj[flavorName] === undefined) {
    // add it to the obj with a default value of 1
      scoopObj[flavorName] = 1;
      
    // if it does exist
    } else {
    // add one to the count
    scoopObj[flavorName]++; 
    }
  }
return scoopObj;
}
console.table(getNumEachScoop(userScoops));