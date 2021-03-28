'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//New lecture - Simple Array Methods

//Why do arrays have methods? MEthods are functions we can call on objects - they are attached - so if we have array methods it means arrays our objects. So array methods ares imply functions attached to all arrays we create in JS

//Arrays are objects and they get access to special built in methods ,aka, tools - this lecture is for some simple tools

let arr = ['a', 'b', 'c', 'd', 'e'];

//slice method lets us extract part of any array without changing the original
arr.slice(2); // This will start slicing at position 3 and go all the way to the end and return a new array
console.log(arr.slice(2)); //this shows us the new array with c,d, and e inside of it

console.log(arr.slice(2, 4)); //length of the array is the end parameter - the starting paremter (4-2(3?))

console.log(arr.slice(-2)); //this takes the last two elements of the array and puts c d and a into a new array
console.log(arr.slice(-1)); //this will give the last of an array

console.log(arr.slice(1, -2)); //this gives b bc b is in pos 1 and c bc c is in position -2 when you start from the right

//we can use slice to create shallow copies of arrays
console.log(arr.slice()); //this gives us the same array
console.log(...arr);
//New method - splice methid - works similar to slice but it changes the original array
// console.log(arr.splice(2)); //gives us c d e but now the original array only contains a and b. The extracted elements c d e are gone from the original array.

//common use case is removing the last element from an array
arr.splice(-1);
console.log(arr); //now only e is gone

arr.splice(1, 2);
console.log(arr);

//reverse method
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f']; //reverse method can reorder arrays
console.log(arr2.reverse()); //now the array is reversed and the method mutates the original array. in each method some mutates and some do not mutate the original - this is very characteristic of each method bc we might not want to mutate the original so cannot use the methods

//next method is concat method to concatenate two arrays
const letters = arr.concat(arr2); //the first is the method that we call concat on and the second is what is joined to 1 - so arr2 is joined to arr 2 and those two arrays combined become letters
console.log(letters);

console.log([...arr, ...arr2]); //this gives same result as concat method BUT DOES NOT MUTATE the arrays

//Join method
console.log(letters.join('-')); //result is a string not an array

//New section -- Looping arrays: for each

//we will loop over an array using forEach method. We already use the for of loop but this one is different/ Now we will work with the bank app data -

//we want to loop over this movements array to print a message for each movement in the bank account - deposits and withdrawls - we can print if some deposit or withdrawl so we will start doing this with a for of loop so we can then compare a for each loop with it

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

//for each loops over the array and in each iteration it will call the functiion. As the as for each method calls the call back function for eaxh iteration it will pass the current element of the array as an argument (movement) so each time this call back function is called (each iteration) it will recieve the current iteration of the array as an argument

//0: it calls the function with the value of 200 bc 200 is at value 0. 1 will be 450, 2 will be 400, ect until it reaches the end of the array. The current iterations get passed nto the array

//What if we needed access to a counter variable? Remember the forEach method calls the callback function in each iteration and as it does it passes the current element of the array in. It also passes the element, the index and the entire array we are looping so we can specificy them in the paremeter list
//what about for each mthod to achieve same thing but easier?
console.log(`---FOREACH---`);
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
//names of parameter dont matter but order does  - the first always needs to be the current element, 2nd the index, 3rd always the entire array that we are looping over bc that is the order that the arguments get passed into the function

//order of paramters is different - in for of loop the 1st element is index and 2nd value is current array element, in the forEach it is the element and then the index and then the entire array

//When should you use forEach and for of? You cant break out of forEach - so the continue and break statements dont work. forEach always loops over the array no matter what - crypto

//New section -- forEach with Maps and Sets

//how does it work? Start with maps!

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//in this array of array, each of the elements is on entry of the map where USD is the key and united stats dolar is the value

//we can call forEach on a map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//This callback function has 3 paremeters - when the foreach method calls it, it will call the function with 3 arguments 1) current value 2) key  3) entire map being looped through -

//can also do with a set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); //does not repeat. remeber set only returns unique values

//lets call forEach on this as well
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`); //Now we get repeats? This means the key is same as value. Why? A set DOES NOT have keys or indexes so it our paremters dont make sense actually and are not needed - designed this way so can use the same named paremeter for both (value, _, map)
});

//data from API usually comes in form of objects

//New section --Creating DOM elements
//We want to display the movements inside the application - in the deposit and withdrawl list - so for each movement we want one element, either a withdrawl or a deposit and the forEach method allows us to loop through the array and each iteration create an element to display on the page

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements; //here we are using slice to create a copy and not the spread perator and we want to keep going so using slice is better and then chain sort to thaat. a - b will do ascending order. if sort is false then mov just becaomes movements.

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}₼</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  }); //How to attach html to the movements element on the webpage? use method called insert adjacent html which takes two strings, the first is the position in which we want to attach the html (afterbegin) 2nd argument is string containing HTML we want to insert (html)
};

// displayMovements(account1.movements);
//We need to empty the container and then start adding new elements (containerMovements.innerHTML = '))

//innerHTML returns everything including HTML, all the tags too. innerHTML is being used as a setter

console.log(containerMovements.innerHTML); //this prints all the html! wow in divs format

//insertadjacentHTML method can be used aftermake a string of html using `` then we can insert it using that methid and innerHTMLreturns everything including HTML

//CODING CHALLENGEabout dogs
// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number${i + 1} is an adult. amd os ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a pup chuck`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//NEw section -Data transformations: map, filter, reduce

//3 big methods for array transformations in JS used to create new arrays based on transforming data from other arrays - very popular. these are map, filter, and reduce

//This is a summary of each - map is another method we can use to loop over arrays. similar to for Each method but it creates a new array based on the originak. t takes an rray and loops over it and in each iterations applies a callback finction thatwe specify in the code to the element

//For example if map is current * 2 then it would multiple each element of the original array and place them into a new array after multiplying them by 2

//it maps the values of the origial array to a new array -usually more useful than forEach bc map can build brand new array contain results of applying an operation to the original

//Next is filter method used to filter for elements in the original array that satisfy a certain condition, like elements > 2. elements > 2 will make it to a new array that the filter method returns. All other get filtered out

//Reduce method are used to boil down all elements of single array into a single value - like adding all the elements of an array together - like a bank account

//to do that we need an accumulator and a current
//acc + current where each iteratio adds to the one before - like a snowball getting bigger as it rolls down hill - NO NEW ARRAY in this case only the reduced value

//new section - the map method

//map method good to loop over arrays and it gives u s brand new array which contains in each position the results of applying a callback function to the original array elements

//EX we want to convernt euros to dollars from the movements array above

const eurToUsd = 1.1;
//now we want to multiplay each element of the movements array by 1.1

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(
  mov => mov * eurToUsd //This is the same fnction as above remade into an arrow function. these types of functions are great and made for call back functions like this one
);

console.log(movements);
console.log(movementsUSD); //this gives us a new array with all the movements from eur to dollars

//map method makes new array with new elements!!!!

//lets do same thing using for of loop
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

//in map method we use a function to make a new array while in the for of loop we loop over one array and then manually create a new one so they are different philosophies - functional programming!!! Go with the map method!

//Lets explore map method - just like forEach also has access to same 3 parameters - the current array, the index and the entire array. Lets use map to loop over movements to create a string
const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    // if (mov > 0) {

    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )} `

  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
);

console.log(movementsDescriptions);

//foreach method creates side effects - actions that were visible in the console. The map method returns each string from the call back and got added into a new array and the entire array was logged to the console not the elements one by one - no side effect was made - a brand new array was built

//New section --- Computing Usernames

//use map and forEach method to compute user names for the account owners - 4 accounts in our example - we want to compute a username which is the initial of each user - we will start on one string and then generalize the function but for now we will make a user name for one string (name)

// const user = 'Steven Thomas Williams'; //User name should be stw
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(function (name) {
//     return name[0]; //this should produce an array with only the 3 initials we want - and it does!
// })
// .join(''); //this gives final result
// console.log(username);
//now use map method after split method - now after the map method creates the array ["s","t","w"] we need to join those letters together so we use the join method

//Now we wll simplify the function above below:
const user = 'Steven Thomas Williams';
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(name => name[0]) //this line is returning bc the callback function in the map method always returns a value to be used in the new array
//   .join('');
// console.log(username);//now we will take this username and put it inside of a function

// const createUsernames = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return username;
// };

// createUsernames('Steven Thomas Williams');
// console.log(createUsernames('Steven Thomas Williams'));//now the above function can take any user name.

//Now we want to compute 1 user name for each of the account holders in our accounts array - should we use map or forEach method? we dont want a new array - we just want to modify the objects - we want to loop over the array and do something so we use forEach!!!

//so lets modify the function above so instead of taking in one user it takes in the array accounts
const createUsernames = function (accs) {
  //need to use forEach method to loop over the array and modify it! the side effects are to change the original accounts array which is what we want so we use forEach

  accs.forEach(function (acc) {
    acc.username = acc.owner //we are doing something to the account object so nn need to return anything - just doing work not creating a new value
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts); //this gives us our original accounts array back but with the added property inside which gives the new assigned usernames

//the property added was username (acc.username = acc.owner) --- very important to understand use case for map method which was perfect bc it allowed us to create a new simple array with only the initials and then the for each method was great to produce 'side-effects' (do some work) without returning anything - we just looped over the accounts array and on each iteration we manipulated the current account object and added a username to it based on the account owner name and the transformations that occur inside of the functuon we created.

//New section - the filter method is used to filter for elements that satisify a certain condition - we do this by using a callback function
const deposits = movements.filter(function (mov, i, arr) {
  //we want to filter out the negative values so only positive values (deposits) make it into the new array
  return mov > 0; // Only movements greater than 0 will make it into the deposits array, the rest get filtered out. We didnt use i or arr but I put them there to remind me that the filter method returns 3 values and those values are returned in order and so must be input in order as well.
});
console.log(deposits);

//Now use for of loop to see difference
const depositsFor = [];
for (const mov of deposits) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor); //This gives same result as filter method above

//What is difference between these two? Why not use for loop for everything? functional code is nice and we can chain all the methods together to build a large final result - impossible to use chaining methods with for loop!!!!! FUNCTIONS!

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

const withdrawalsForLoopMethod = [];
for (const mov of movements) if (mov < 0) withdrawalsForLoopMethod.push(mov);
console.log(withdrawalsForLoopMethod);

//NEw section - the reduce Method

//3rd data transformation method - we use reduce method to boil down all the elements in an array to one single value- like adding all the numbers in an array - lets try that now with the movements array

//by adding up deposits and withdrawls we end up with global account balance
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); //this call back function is different. Usually urder us value, index, entire array but in reduce method the 1st is the aCCUMULATOR(acc) which is like a snowball that keeps accumulating the value we want to return - so in the case of adding an array together that would be the sum. This callback function will be called on each iteration. What will we do in each iteration? Since acc is what we keep adding to we add the current value to acc. (acc + cur)

//each iteration updates the value. ***REDUCE METHOD HAS SECOND PARAMETER besides the function, the intitial value of the accumulator (, 0) this is the value of the acc in the first iteration so e start adding at 0
console.log(balance); //we have one single number now!

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); //We always need an EXTERNAL variable when using a forLoop which is fine when only 1 loop is needed but become impractial when many loops withmany operations used. So these other methods completely avoid the extra variable and just return the value instantly

//rewrite function above in arrow function
const balanceArrow = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceArrow);

//Now let us calculate the balance of the movements on the screen and print them to our interface

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  //now we need to display it in the onscreen element! class name is balance__value = labelBalance
  labelBalance.textContent = `${acc.balance}₼`;
};

// calcDisplayBalance(account1.movements); //this shows the balance in euro on the screen accross from current balance!

//This finishes the calculate balance and display balance in one function and we also have display movements finished (from the flow-chart)

//Now we want the Maximum value of the movements array so we can also use reduce bc reduce is for boiling the array down to 1 value - it doesnt have to be a sum or multiply. Could be a string or an object too.

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max); //reduce method is most powerful array method! have to make sure you know what you want acc and cur to be and how they should interact

//Challenge -- back to the dog study! map filter and reduce methods!
// Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
  //now filter for dogs over 18 out
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  //here is another way to do the dfunction const average
  // const averageX = adults.reduce(
  //   (acc, age, i, arr) => acc + age / arr.length,
  //   0
  // );
  return average;
};
calcAverageHumanAge([5, 2, 6, 8, 5, 9, 2, 1, 19, 3]);
console.log(Math.trunc(calcAverageHumanAge([5, 2, 6, 8, 5, 9, 2, 1, 19, 3])));

const avg1 = Math.trunc(calcAverageHumanAge([3, 66, 4, 5, 8, 3, 6, 11, 10]));
console.log(avg1);
// console.log(averageX);

//New section - The MAgic of Chaining Methods

//So far have used map, reduce and filter methods in isolation - we can go further by chaining the methods one after another however

//Example - we want to take all movement deposits and convert them from euros to dollars and then add that total up so we know how much is in the account in US dollars

//We could do this individually and store in individually variables or we could do all at one go - check below
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
//movements.filter(move => mov > 0) is to see if transactions are deposits or not and if they are then those deposits will go into a new array. That new array can then have .map(mov => mov * eurToUsd) called on it which will convert the transaction from euros into US dollars. Then on this result we can also call a reduce method: reduce((acc, mov) => acc + mov, 0); We could call more mthods too. We want to add all these values together using the reduce method  then we can store all into the varaible const totalDepositsUSD

//That was 3 data transformations art once
console.log(totalDepositsUSD);
//We could keep adding methods so long as they keep returning arrays - reduce only returns a value so we could not chain after that.

//We can only chain onto methods if the one proceeding it returns an array as its value!!! Data processing pipeline

//Sometimes chaing methods makes debugging more difficult bc you not sure which method resulted in the error so you need to check the array in each step

//We can use the array parameter we get access to in the callback function (mov, i, ARR) - SO TO CHECK ERROR IN CHAINING check the current array in the NEXT method that is chained to check it

//we can check the current array at any stage in the pipeline by using the THIRD parameter of the callback function

//Let us go back to our app and calculate the IN OUT and INTEREST statistics at te bottom of the page ---

const calcDisplaySummary = function (acc) {
  //changed to acc from moments
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}₼`; //This gives us the value for IN at the bottom

  const outcomes = acc.movements //added in acc. to all the movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}₼`; //This gives us the value for OUT at the bottom without the negative sign

  //lets say the bank pays out 1.2% interest on deposits
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100) //changed the interest rate from 1.2 here
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1; //This ensures only interest payments above 1 are added
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}₼`; //this gives us the INTEREST value. but now what if the bank only pays the interest if the interest is at least 1 euro - where do we put this in our calculations?
};
// calcDisplaySummary(account1.movements);
//.filter(mov => mov > 0) gets us the deposits we need for calculating interest. Then we need a new array with all the interest. Then we concat those two array together for the total like this: .map(deposit => deposit * 1.2/100)     then we use the reduce method instead of concat to add the two arrays together .reduce((acc, mov) => acc + mov, 0);

//Do not overuse chaining because it can cause performance issues on huge arrays. We should try to compress the functionality into as few methods as possible. It is bad practice to chain methods that mutate the underlying original array - like Splice or reverse method, because they change the original array.

//Avoid mutating arrays!!!

//Coding challenge -- rewrite the function from the previous challenge CalcHumanAge as an arrpw function
const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  return average;
};

const calcAverageHumanAge3 = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0); //this is the answer to the bonus how to convert the functions over

console.log(
  calcAverageHumanAge([3, 5, 6, 7]),
  calcAverageHumanAge2([3, 5, 6, 7]),
  calcAverageHumanAge3([3, 5, 6, 7])
);

//NEw section - the find Method

//Can use find method to retrieve one element of an array based on a condition
const firstWithdrawl = movements.find(mov => mov < 0); //find method accepts a condition and accepts a callback function that is called as the method is looped over the array. It retreieves an element from the array. The method above is lookig for withdrawls based on the code. This method does not return a new array. it only returns the first element in the array that satifies the condition - the first array for which the operation is true or in this casse, the first withdrawl

console.log(movements);
console.log(firstWithdrawl); //-400 is the first array that appears in the specified array that meets the specified parameters. Similar to filter but not the same bc filter returns ALL the eements that match the condition while find only returns the first one

//secondly, the filter method returns a new array while find only returns the element itself and not an array

//NEw example - start working with our array of objects - our accounts array with the four objects where each of them is 1 account --- a very common data strcutrue

console.log(accounts);

//find lets us find something in the array based on properties of the object
const account = accounts.find(acc => acc.owner === 'Jessica Davis'); //This will search through our accounts array for the one which has the value which matches the owner key specified (jessica davis)
console.log(account); //This gives us just the one object for Jessica Davis

for (const acc of accounts) accounts.find(acc => acc.owner === 'Jessica Davis');

for (const mov of deposits) if (mov > 0) depositsFor.push(mov);
for (const mov of movements) balance2 += mov;

console.log(accounts, deposits, movements);

//NEw section -- Implementing Login
//This is to implement the login feature of our application --remember in the beginning we cannot see anything. We put a username and a pin in and if it is correct then we get logged in whether we click the button or hit the enter button and then we get logged in where all of our account information is shown -

//We use the login__btn in the html that we will attach the addeventlistener. the user name will come from the login__input--user class and the pin from the login__input--pin class.  (btnLogin, inputLoginUsername, inputLoginPin)

const updateUI = function (account) {
  displayMovements(account.movements);

  calcDisplayBalance(account);

  calcDisplaySummary(account);
};

let currentAccount;
//now we will create the event handlers
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(`login`);
  //default behavior of html when we click a submit button is for the page to reload - we need to stop that so we need to give the function an event paremeter (e)  by using e.preventDefault(); we will prevent the form from submitting and thus stop the page from reloading when we click the button

  //On forms, whenever we have a field input and we hit enter it will automatically trigger a click event on the button.

  //To log the user in we need to find the account from the accounts array with the username that the user inputted  - find method comes to play here

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount); //so finish logging the person in need to check if pin is correct too
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //must convert to number bc the value is always a string
    console.log(`LOGIN`); //this checks the pin . find method returns undefined if no element mathces the condition

    //putting in the ?. makes sure that the pin property only gets read/checked if the current account actually exist - now we get undefined instead of an error when an improper username/pin is entered

    //if the account does exist and pin is correct then do what?

    //1) we want to display the welcome message to the UI
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`; //this gives us the first name of the user. split(' ') takesoff the first word and the [0] takes the first element - the name

    //Now how to display the UI? remember we set opacity in beginning from 0 to 100 which is default. usually opacity is 0. So when user logs in we want to set the opacity to 100. -- i just removed it in css
    //now set it using containerApp element
    containerApp.style.opacity = 100; //this makes everytinh visible with correct credentials

    //The balances and movements are currently hardcoded from before in calcdisplayr summary blance and movements but now we dont want that - we want to do it inside the log in function bc we dont want to run those functions right when our script is loaded we only want to calculate them and display the balance movements and summary as soon as we actually get the data we want to display

    // displayMovements(currentAccount.movements);

    // calcDisplayBalance(currentAccount);

    // calcDisplaySummary(currentAccount); //these three functions get refactored into updateUI

    updateUI(currentAccount);

    //Now we are getting the data we want directly from the account object itself - logging into different users gives the unique users account balance information - so this works depending on the user data

    //Now as we log in we need to get rid of the data in the login fields and make them lose their focus
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Now we want to go back to calcDisplaySummary and edit the interest rate because right now is set at 1.2 but not all accounts have this interest rate. So need to set dynamic. to get access to those interest rates we need more than just the movements as the paremter, we need the entire account bc then we can take the movements and interest rate from the entire account.

    //So we will pass in the entire account not just the movements then we can take the movements that we need to callcculate the 3 statistics including the interest rate.
  }
});

//New section - Implementing Transfers

//Now we will set up transferring $ from one user to another. Transfer money gets a user name and an amount. We need to attach an event handler to the button on the transfer money element. it is the btn.form and we will take out values from the form__input--amount anf form__input--to (inputTransferTo, inputTransferAmount, btnTransfer)

btnTransfer.addEventListener('click', function (e) {
  //we need the e because this is attached to a form so when we click the button the page will reload unless we  prevetDefault
  e.preventDefault();
  //now we will create data based on input data starting with the amount to transfer
  const amount = Number(inputTransferAmount.value); // now we have the amount but need to know the account we want to transfer
  const receiverACC = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverACC); //this logs the amount sent and the recievers account

  //Now we need to add a negative movement to the current user and a positive movement to the recipient : sender loses money and recipient gains it - so we need to update the UI, summary and balance

  //we first need to check if the amount being sent is positive and if the current user has enough money to transfer the money

  //so first we implement the check to make sure have enough money
  if (
    amount > 0 &&
    receiverACC &&
    currentAccount.balance >= amount &&
    receiverACC?.username !== currentAccount.username
  ) {
    console.log(`transfer valid`); //now can transfer valid transactions to valid accounts. Invalid transactions or inputs result in nothing happening or undefined

    //now we are ready to implement the steps of subtraction and addition for transfers

    currentAccount.movements.push(-amount);
    receiverACC.movements.push(amount); //these two lines of code take care of doing the transfer but now also need to update the user interface with the new data so we will refector the functions above into one called update UI
    updateUI(currentAccount); //Now it shows when transfers happens and the arrays are all updated!
  }
});
//clean out the input statements
inputTransferAmount.value = inputTransferTo.value = ''; //now the fiels are empty again

//Next Section - The findIndex Method

//related to find method. Works similar but it returns the index of the found element not the element itself. USe case? The close account feature. Closing an account means deleting that account object from the accounts array - so if saray closes her account then account 4 would be depleted

//usually to delete an element from an array we use splice but for splice we need the index where we want to delete. Where can that index come from? From findIndex method.

//Ex
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(`Delete`); //this makes the close account button register clicks. now need to check that user credentials are correct.
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    console.log(index);
    //use splice method to delete current account
    // accounts.splice(index, 1); //splice methods mutates underlying array so no need to save

    //Now lets delete the user
    accounts.splice(index, 1);

    //Hide UI next
    containerApp.style.opacity = 0; //this closes the UI interface and hides it like before login
  }
});

//with indexOf we can only search for a value in the array - true or false - but with findIndex we can create a complex condition . Both return an index number.

//indexOf and findIndex get access tot he current index and the current entire array (value, index, array)

//Also these are ES6 methods so dont work in old browsers

//New section -- some and every

//More array methods - this one is some and every! some some method lets look back at includes method
console.log(movements);
console.log(movements.includes(-130)); //so includes method can test if an array contains a certain value but only really testing for equality. If any value in the array is ===          what if we wanted to test for a condition instead? That is where some comes in

//We want to knoow if have been any deposits on the account, any positive movement? How would we check this?
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits); //This gives true bc there are movements over 0 but what if we want to check for any over 5000? change the number (mov => mov > 0) to 5000 and it gives false bc no movements match the conditions

//So one method checks for equality and the other checks for conditions (some)

console.log(movements.some(mov => mov === -130)); // this gives us true bc there is a movement === -130
//For cqase where we need condition the some method is perfect

///How to use for implementig functionality? By requesting a loan to the bank. The some method will become helpful for the loan feature bc our bank has rule that only grants loan if atleast 1 deposit with atleat 10% of loan amount

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //this line says that if atleast one of the elements in the movements array has this condition, is true - is greater than 10% of requested - then everything here becomes true so some method is perfect

    //Now we will add the movement from the bank loaning to the customer borrowing
    currentAccount.movements.push(amount);

    //Now we need to update the UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//close cousin of some method is the every method

//the every method only returns true if ALL the elements in the array satisfy the condition we pass in - if all elements pass the test then the every method returns true

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0)); //all these transaction in accnt 4 are above 0 (deposits) so this returns true

//Separate callback - we have always written directly to our array methods but we could write separete and pass as a call back. Example below
const deposit = mov => mov > 0; //we called deposit to this function which is the same as the functions above - but no reason to be directly written in the array methods like that - we could write like this and then call like this:
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); //then we can just edit the deposit function which would be better functionality and DRY

//New section - flat and flatMap
const arrT = [[1, 2, 3], [4, 5, 6], 7, 8]; //What if we want to take all the elements from these sub arrays and put them into one array? use flat method

console.log(arrT.flat()); //no cal back function - just this which gives the result of one array

//what if we have an even more deeply nested?
const arrW = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrW.flat()); //this time we get a result which still contains the inner arrays - so the flat array only goes one level deep when flattening an array

console.log(arrW.flat()); //flat runs with a 1 as default which gives us the shallow but if we put 2 or 3 then it will go to those levels of nesting too and remove those elements from the array as shown below
console.log(arrW.flat(2)); //this gives us the result of just one array again as with arrT

//bank app wants co calculate balance of all the movements from all the accounts - how?

//the movements are stored in arrays when are inside of objects inside the accounts array.

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements); //this gives us all the movements from all 4 accounts and now we want an array with all these values inside just one array

const allMovements = accountMovements.flat();
console.log(allMovements); //now we have a single array with all 29 transactions - now we just need to add them all together and put inside a new array
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); //Now we have all the values added together in a single array

//We can do everything we did above using chaining!
const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2); //this gives us same result!

//using a map first and flattening the operation is a common operation

//Another way to solve this is using flatMap which combines the map and flat method into one which is better for performance
const overallBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance3); //same result but flatmap only goes one level deep so if we need to go more than one level deep have to use flat method

//New section - Sorting Arrays

//the ability to sort our movements is what this is about. Sorting is much discussed in comp science using many algorithms. For now, we just use JS built in sort method. Ex below
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // this puts the array into an alphabetical sort
//this methid mutates the original array

//example using numbers
console.log(movements);
console.log(movements.sort());

//The sort method does sorting based on STRINGS by default -. basically it converts everything to strings and sorts it --- look at the console log - the numbers are sorted like they are strings - we can fix this by passing in a compare callback function into the sort method

movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
}); //imagine a as the current value and b as the next value as the sort method loops over the array. in the callback function if we return less than 0 then a willl be sorted before b. if a returns positive then a will be put before b in the sorted output.

//Sort the movements array into ascending order in the movements.sort above ^

//ex - imagine we want to switch 450 and -400 450(a) -400(b) but we want to switch so that b then a. so we need to return something greater than 0. In the case that a is greater than b then we want to return something greater than 0

//so if a > b then we return something > 0 and if a < b then return something < 0.

console.log(movements); //this is showing the mutated version of the movements array after the sort method has been run on it

//The array is now sorted in ascending order bc the sort method keeps looping over the array applying the callback function until everything is in an ascending order according to the rules we established. So returning 1 means to switch the order and returning -1 means keep the order

//ex: 200 and 450 --- in this case we want to keep the order bc 450(b) is more than 200(a) but with 450 and -400 then 450(a) is > -400(b) which means a 1 is returned which means the order should be switched and so the two trade places.

//to sort descending we would do it like this:
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});

movements.sort((a, b) => a - b); //this is a another way to write the first movements.sort method from above
console.log(movements);

movements.sort((a, b) => b - a); //rewritten for descending values

//if you have a mixed array with strings and numbers then sort wont work so dont use this method

//Now lets implemement the sort method in the banking app down at the sort button at the buttom of the UI which sorts the transactions in an ascending order. If we click it again the buttons unorders the list

//we will put this function inside the function that displays the movements - first implemement the sorting and then the clicking on the button -- add a second parameter to the displayMovements function sort = false, the parameter orders the movements to be sorted or not and false is default to show the list unordered - scroll up to the displaymovements function to see how this functionality is implemented

let sorted = false; //this was added after

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted; //this makes the sort button sort the transactions . how do we make it work the other way? By using a state variable to monitor whether we are sorting the array or not. That variable needs to live outside the clalback function so its value is preserved after the button is clicked bc the function is executed each time we click the sort button and if we define the variable inside the function it would get crrated newly each time we clicked the button but we want to preserve the sorted stat. So set the let sorrted = false varbaile OUTSIDE the functuon
});
//when sorted is false then we want to sort it so we need true in the displayMovements(currentAccount.movements, !sorted) but if it is already sorted then we want the opposite so sort should be back to false.

//LAst thing is to flip the variable then by doing sorted = !sorted; whch allows everything to work. Now each time we click we change sorted from true to false and false to true, ect ect

//NEw method - More ways of creating and filling arrays
//How to programatically create andf fill arrays. usually we always write them out by hand like below
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 5, 6));
//in both cases we already have our data. we can also generate arrays programatically without doing it manually - multiple methods - easiest way is using array constructor function like below
const x = new Array(7);
console.log(x); //this creates a new array with 7 empty elements. The array function does it so whenever we pass in 1 argument it creates a new empty argument of that length - so must remember this pecularity of the array method function. Also cannot use the x array we made for anything by calling map on it like below
console.log(x.map(() => 5));
//the above doesnt return anything - it is not really useful except for one thing we CAN call on the empty array and that is the fill() method shown below

x.fill(1); //Whatever we pass in to fill is what the new array will get filled up with - in this case 1
console.log(x); //Now we get an array with 7 1's in it, Why 7? Bc remember when we used the new Array function we put 7 inside as the parameter which created a new array with 7 empty spaces so when we called fill on that array the fill filled that array up with 1, 7 times because it had 7 empty spaces.

//We can also specifiy a begin parameter in the fill method - the 2nd number specifies where we want the array to start getting filled at like below
const y = new Array(7);
console.log(y.fill(1, 3));

//We can also specifiy an end parameter as well which will tell it where to stop filling the array up as below
const z = new Array(7);
console.log(z.fill(1, 3, 5)); //this returns an array with 3 empty slots, then two slots filled with 1's as specified, then 2 more empty slots at the end of the array

//We can use fill method on other arrays that are not just empty

const tarr = [1, 2, 3, 4, 4, 5, 6];
console.log(tarr.fill(23, 4, 6));

//this created ana rray programaticcaly without needing to write it out manually - what if we wanted to recreate the array from our first example programitcally? Use array.from !

const yy = Array.from({ length: 7 }, () => 1); //this methid is not being called on an array - it is being used on the array constructor function. On that function object we call the from() method - the first parameter is an object with length propert and the second is a mapping function.

//First we willprogramatically recreate the array with the 7 1's  by writing a callback function () => 1)   this function simply returns 1 every iteration which will put a 1 in each array position
console.log(yy); //The above method produced the same result as the new Array.fill() method. In the above the first parameter governs how large the array will be and the second whay will be placed inside each position

//lets go further
const zz = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(zz); //this call back function we use the current element (curr) and the index which will vary between 1 and 6 so we need to return i + 1 to account for the fact that the array starts at index 0

//the call back function same like that in a map method - remember _ signifies a throw away variable that we dont need - such as the above example where we dont need anything except the index and so instead of writing curr we could just put an _ which would signify that the paremeter was not needed. (i changed curr to _ in the (_, i) above. it was curr but we didnt need that paremter so I put the throw away value of _ which denotes we are not using the current element)

//So these are methods to create arrays programtically - ex creating array with 100 random dice rolls.

const randomHundred = Array.from(
  { length: 100 },
  (diceRoll, index) => Math.trunc(Math.random() * 100) + 1
);

console.log(randomHundred);

//What is another use cast of the Array.from() function? Was originally introcuded to create arrays from create like structures - remember iterables? strings maps sets, ect? They can be converted to arrays using array.from() which is reason for method nname bc we can create arrays FROM other things.

//Another example is using querySelectorAll which returns a node list which contains all the selected elements. It is not a real array so does not have most array methods like ma or reduce so if we wanted to use a real array method like that on a node list we would first have to convert the node list into an array and this is another great use case for the from() array

//Example is we dont have the values of our movements stored onto an array. Pretend we only have the values stored in the user interface but not in the code - but we want to calc the sum so we need to get them from the UI and then do the calculation -- shown below!

const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI); //gives us only the 2 elements that are loaded on the UI not the ones from the account object - false positives! if we want to cselect the acutual account transaction elements we need to put the code on an event handler - we will perform the action when we click on the balance label

labelBalance.addEventListener('click', function () {
  const movementsUII = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('₼', ''))
  );
  console.log(movementsUII); //now when we click the balance it gives us all of the movements in a new array - but we cant call map method on itto get just a number but we have the money sign we need to get rid of first

  // console.log(movementsUII.map(el => Number(el.textContent.replace('₼', ''))));

  console.log(movementsUII);

  //Yet another way to convert    document.querySelectorAll('.movements__value') to an array is below:
  movementsUI2 = [...document.querySelectorAll('.movements__value')];
  //using the spread operator will also make a new array and then we would have to do mapping separate to the Array.from() is better.
}); //we can make better by using the second argument from the Array.from() method which is the mapping call back

//RECAP: we used Array.from() to create an array from the result of the query selector all which is a node list that is not really an array but is an array like structure. That array like sctructure can be converted to an array using Array.from()     Then as a second step we included a mapping function which trasnforms that initial array to an array just like we wanted it

//New section --Summary: Which Array Method to Use? We have learned 23 so far!

//How to choose between the 23 different methods?

//Ask yourself first - what kind of result do you want?
//1)  Mutate original array - add to original: .push & .unshift    remove from original: pop & shift & splice(removes any)     These also mutate the original arra:    reverse, sort & fill

//2) Make a new array - a) computed from original is .map   b) filtered using a condition is .filter   c) to make a new portion of an original is .slice    d) adding original to other is .concat    e) flattening the original is .flat & .flatMap

//3) MAke an array index     a) searching based on a value is .indexOf     b) searching based on a test condition is .findIndex

//4) Know if an array includes by:   a) based on value use .includes    b) based on test condition use .some || .every these specifiy a condition based on a callback function -- some returns if at least 1 element satisifes the condition and every only returns if ALL elemnts satisfy the conditions ---these all return boolean values , like if/else

//5) transform array values to one value using .reduce which uses an accumulator to return a single value of any type

//6) contains an array element - use the .find method which uses a test condition

//7) Turn an array to a new string using .join

//8) Loop the array without producing new values then use .forEach whcih does not create a new array or a new value - it just does work on the array.

//New section - Array Methids Practice
//1) Calculate how much in total from all accounts has been deposited to the bank

const bankDepositSum = accounts.map(acc => acc.movements).flat();

//whenever we want a new array with the samelength as the original we use map and pur callback function calls accounts and takes ut the account movements

console.log(bankDepositSum); //this gives us all the different movements but how to get them out of these arrays and put them into a parent? use flat -- remember combine map and flat together! flatMap
const bankDepositSum2 = accounts.flatMap(acc => acc.movements);
console.log(bankDepositSum2); //now just need to filter for the deposits using filter and then add them all together using reduce

const bankDepositSum3 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0); //this logs the total amount in all accounts to the bank
console.log(bankDepositSum3);

//2) We want to count how many deposits there have been in the bank with at least 1000$ 2 ways to do this

const numDeposits1000 = accounts.flatMap(acc => acc.movements); //We take all the movements and put in all one array here
console.log(numDeposits1000);

//Now filter for movements > 1000
const numDeposits1000b = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

//next we can take the length to tell us how many deposits over 1000
console.log(numDeposits1000b);

//2nd method of doing the same thing using reduce mthod
const numDeposits1000c = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); //this time the accumulator is the number of movements greater than 1000
console.log(numDeposits1000c);

//++ operator does increment the value attached to it but it returns the original value until called again. We can use prefixed ++ operator to fix this from happening so instead of a++ do ++a.
const numDeposits1000d = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000d); //works sae as above but is the most advanced!

//3) mre advanced case of reduce mthod. This time we will create a new object instead of just a number or string. Reduce boils an array to 1 value, which could be an object, or another array. Reduce can do most everything.

//Goal is to create an object which contains a sum of deposits and withdrawls at the same time in one go using reduce method

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, value) => {
      value > 0 ? (acc.deposits += value) : (acc.withdrawls += value);
      return acc;
    },
    { deposits: 0, withdrawls: 0 }
  );

console.log(sums);

//now we can destructure the argument immediately
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (acc.deposits += cur) : (acc.withdrawls += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (acc.deposits += cur) : (acc.withdrawls += cur)
//       sums[cur > 0 ? `deposits` : `withdrawls`] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// So above we created a new object using the reduce method!

//4) create a simple function to concert any string to a title case ---- that means all words are capitalized except for some exceptions

const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with']; //capitalize all words except these

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase; //now we need to capitalize each word individually so we need an array. So we need to split this string nto an array so that each word is an element of the new array.

  //now we want to go thru the array and capiatalize each word not inside the exceptions array. whenever we want a new array of same size as before we use map

  //now we need to exclude the exceptions but we want to keep the array the same length so not use filter - instead we used exceptions.includes(word) ? word :

  //now just have to join the array back with the space and finished!
};

console.log(convertTitleCase(`this is a nice title`));
console.log(convertTitleCase(`this is a LONG title but n ot too long`));
console.log(convertTitleCase(`and here is anotehr title with an EXAMPLE`));

//This fixes the situation where and is the first word and is not capitalized but we want it to be whilst folowing the other rules
const convertTitleCase2 = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase2(`this is a nice title`));
console.log(convertTitleCase2(`this is a LONG title but n ot too long`));
console.log(convertTitleCase2(`and here is anotehr title with an EXAMPLE`));

//Coding Challege 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28))); //This line of code is saying hey - dogs array with all those object. Hey, we want to add a NEW property inside of your object and we want to call that new property recFood which is a value which is determined by some operation
console.log(dogs);

//2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah')); //this is how we find Sarah's dog using a bollean value - find method returns first element for which condition is true. When array of owner includes Sarah then condition is true so we get this object
console.log(dogSarah);
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? `too much` : `too little`
  } food.`
); //this logs the message to the console

//3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood); //this gives us the dogs eating too many
console.log(ownersEatTooMuch); //now we want the owners. A new array based on an existing array and the new array same length as before. We want to take something out of original array and put into new so we use map
const ownersEatTooMuch2 = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .map(dog => dog.owners);
console.log(ownersEatTooMuch2); //now to transform this into one array we call flat

const ownersEatTooMuch3 = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch3);

const ownersEatTooMuch4 = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch4);

//Now need to do same for owners eat too little
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4
console.log(
  `${ownersEatTooLittle.join(
    ' and '
  )}'s dogs eat too much. ${ownersEatTooLittle.join(
    ' and '
  )}'s dogs eat too little.`
);

//5
console.log(dogs.some(dog => dogs.curFood === dogs));

//6
console.log(
  dogs.some(
    dog => dog.curFood > dog.recFood * 0.9 && dog.cur < dog.recFood * 1.1
  )
);

//7
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));
console.log(dogs.filter(checkEatingOkay));

//8
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood); //since these # are in objects that makes a and b the objects and the value we want to subtract are in the objects so we have to get the values out of the objects as shown above
console.log(dogsCopy);
