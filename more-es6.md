# More ES6
## Destructuring

First I want to talk about a question that came up yesterday. 
```js
import React, { Component } from 'react'; 
```

##### Why do we put `Component` in curly braces?

This is implementing a part of ES6 called `destructuring`. Destructuring allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals. What does that mean exactly? Lets look at some examples:

### Array Destructuring
```js
// lets say we have an array of integers
const array = [1, 2, 3, 4];

// and we want to assign variables equal to the first two values. Normally we would have to do:
let first = array[0];
let second = array[1];

// With destructuring, we can use this syntax:
let [first, second] = array;

console.log(first, second) // would log both 1 and 2 to the console

// it will declare variables equal to the values at the same index in the array. We can do so for as many variables as we want.

let [first, second, third, fourth] = array;
```

### Object Destructuring
```js
// lets say we have an object with a user's information
const user = {
  name: "Trevor Preston",
  email: "TrevorHatesPuppies24@hotmail.com",
  age: 11,
  favoriteColor: 'mint green'
}

// normally if we want to set variables equal to trevor's name and email we would have to do it seperately:
let name = user.name
let email = user.email

// With destructuring we can use this syntax:
let {name, email} = user;
```
---
## Rest Parameters and Spread Operator

Many JavaScript built-in functions support an arbitrary number of arguments. For example:

```js
Math.max(arg1, arg2, ..., argN)
```
takes any number of arguments and returns the maximum value.

We can define a function that takes an arbitrary number of arguments using what we call a `rest parameter`:

```js
const sumAll = (...numbers) => {
  // here numbers will be an array of however many numbers are endered when the function is called
  let sum = 0;
  numbers.forEach(number => sum += number);
  return sum;
}

sumAll(1, 2) // => 3
sumAll(1, 2, 3, 4, 5) // => 15
sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14) // => 105

// Overall, rest parameters takes a group of elements and puts it into an array. Rest can also be used with destructuring. Lets take our array of numbers from before:
const array = [1, 2, 3, 4];

// As we saw earlier, we can take out the first and second elements by using destructuring:
let [first, second] = array;

// We can also get an array of the rest of the elements using rest parameters:
let [first, second, ...others] = array;

console.log(others) // => [3, 4]
```

The opposite of rest parameters is the spread opperater. It takes elements in an array or object and expands it to be used elsewhere. 

```js
// For example, if we have an array of numbers and want to use Math.max to find the largest, we would normally have to input each of them into the function:
const array = [1, 2, 3, 4];

Math.max(array[0], array[1], array[2], array[3]);

// This can end up being a lot of code and also become a problem if we don't know how many elements will be in the array. With the spread opperator we can use the following syntax:
Math.max(...array);

// It will expand all of the elements in the array as parameters for the function.

// We can also use spread opperators to add elements to another array
const array = [1, 2, 3, 4];
const anotherArray = [-1, 0, ...array] // => [-1, 0, 1, 2, 3, 4]

// Similarly we can use spread opperators with objects. 
const obj = {
  a: "one thing",
  b: "another thing"
}

const anotherObject = {
  ...obj,
  c: "a new thing"
}
// anotherObject would be:
// {
//   a: "one thing",
//   b: "another thing",
//   c: "a new thing"
// }
```
---
## Resources:
- [A Dead Simple Guide to Destructuring](https://wesbos.com/destructuring-objects/)
- [Exploring JS Destructuring](http://exploringjs.com/es6/ch_destructuring.html)
- [Rest Parameters and Spread Operator](https://javascript.info/rest-parameters-spread-operator)