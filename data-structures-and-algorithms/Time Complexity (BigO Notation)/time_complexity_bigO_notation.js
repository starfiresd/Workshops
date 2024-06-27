/* # Time Complexity (BigO Notation) # */

/*
  The time complexity of an algorithm quantifies the amount of time taken by an algorithm to run 
  as a function of the length of the input. Note that the time to run is a function of the length 
  of the input and not the actual execution time of the machine on which the algorithm is running on.
    - Geeks for Geeks (https://www.geeksforgeeks.org/time-complexity-and-space-complexity/)
*/

/*
  ## Interview Questions ##
  1. What is Big O Notation?
  2. What is the difference between Big Omega, Big Theta, and Big O?
  3. What is the difference between O(1) and O(n)?
  4. What are the practical implications of choosing the right algorithm in software development?
  5. How does the size of input affect an algorithms time complexity?
  6. Why do we use BigO Notation to compare algorithms?
*/

/* 
  ## Examples ##
  Functions that represent BigO Notation time complexities.
  Each function will return the number of operations for a given number of elements.
  Use this example to understand how certain time complexities compare to others.
*/

/**
 * @description O(1) Constant
 * @param {int} n number of elements
 * @return {int} number of operations
 */
function BigOConstant(n) {
  console.log(`BigOConstant: n =`, n, `operations =`, 1);
  return 1;
}

/**
 * @description O(log n) Divide and Conquer
 * @param {int} n number of elements
 * @return {int} number of operations
 */
function BigODivideAndConquer(n) {
  console.log(`BigODivideAndConquer: n =`, n, `operations =`, Math.log2(n) + 1);
  return Math.log2(n) + 1;
}

/**
 * @description O(n) Proportional
 * @param {int} n number of elements
 * @return {int} number of operations
 */
function BigOProportional(n) {
  let operations = 0;
  for (let i = 0; i < n; i++) {
    operations++;
  }
  console.log(`BigOProportional: n =`, n, `operations =`, operations);
  return operations;
}

/**
 * @description O(n^2) Loop within a Loop
 * @param {int} n number of elements
 * @return {int} number of operations
 */
function BigONestedLoop(n) {
  let operations = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      operations++;
    }
  }
  console.log(`BigONestedLoop: n =`, n, `operations =`, operations);
  return operations;
}

BigOConstant(1);
BigODivideAndConquer(1);
BigOProportional(1);
BigONestedLoop(1);

console.log("\n");

BigOConstant(1024);
BigODivideAndConquer(1024);
BigOProportional(1024);
BigONestedLoop(1024);
