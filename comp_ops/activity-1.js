/*
 * ACTIVITY 1: Understanding Comparison Operators
 * 
 * Problem 1: Equality Operators (== vs ===)
 * Understand the difference between loose and strict equality
 */

// Your task:
// 1. Predict the output of each comparison, then test:
console.log(5 == "5");        // What does this return?  true
console.log(5 === "5");       // What does this return? false
console.log(0 == false);      // What does this return? True 
console.log(0 === false);     // What does this return? false 
console.log(null == undefined); // What does this return? true
console.log(null === undefined); // What does this return? false 


// 2. Create 5 examples where == returns true but === returns false
// 3. Explain when you would use == vs === in real code
console.log(67 == "67");
console.log(2 == false)
console.log( pi == undefined)
console.log( 1/3 == ".33333333333333333333333333333333333333333333333")
console.log(4 == undefined)
// I would use === when needing a specific funcrtion, but I would use == when not needing a specific to do a certain function
// ============================================================================
// Problem 2: Relational Operators
// Work with <, >, <=, >= operators
// ============================================================================

const age1 = 18;
const age2 = 21;
const score1 = 85;
const score2 = 90;

// Your task:
// 1. Compare ages: Is age1 less than age2? Is age1 at least 18?
// 2. Compare scores: Is score1 greater than 80? Is score2 at least 90?
// 3. Create expressions that check if a student can:
//    - Vote (age >= 18)
//    - Drive (age >= 16)
//    - Drink (age >= 21)
//    - Get senior discount (age >= 65)
// 4. Challenge: Write a function 'checkEligibility' that takes age and returns 
//    an object with all eligibility checks
function CheckAge (age ) {
if (age >= 18)
{return "can vote"}
else if (age >=16)
{return "can drive"}
else if (age>=21)
{return "can drink"}
else if (age >= 65)
{return "senior discount"}
else if ("checkEligibility ")
{return age}
}
// ============================================================================
// Problem 3: String Comparisons    
// ============================================================================

const name1 = "Alice";
const name2 = "Bob";
const name3 = "alice";

// Your task:
// 1. Compare: name1 < name2 (what does this mean for strings?)
// 2. Compare: name1 === name3 (case-sensitive comparison)
// 3. How would you do a case-insensitive comparison?
// 4. Challenge: Create a function 'sortNames' that sorts an array of names 
//    alphabetically, case-insensitively
function sortNames ( name1, name2, name3) {
    if (name1,name2,name3)
    {return name1, name3,name2}
    else if (name2,name1)
    {return name1, name2}
    else if (name3,name2)
    {return name3, name2}

}
// ============================================================================
// Problem 4: Comparison with Different Data Types
// Understand type coercion in comparisons
// ============================================================================

// Your task:
// 1. Predict and test these comparisons:
//    "10" > 9
//    "10" < 20
//    "apple" > "banana"
//    true > false
//    null < 1
//    undefined == null

// 2. Create 3 examples where type coercion leads to unexpected results
// 3. Explain how to avoid these issues
// 4. Challenge: Write a 'safeCompare' function that compares two values 
//    strictly without type coercion, but handles edge cases gracefully

"10000" > 9
"33333333" < 232459299323
"orange" > "watermelon"
true > false
null < 20
undefined == null