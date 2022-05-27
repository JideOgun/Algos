/*
A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

By this logic, we say a sequence of brackets is balanced if the following conditions are met:

It contains no unmatched brackets.
The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.
*/

function matchingBrackets(s) {
  /*
set up an object map with the backward brackets as the keys and the forward brackets as the values
then create an empty array called stack LIFO
if the first char in s i.e s[0] is any backward bracket then the brackets are invalid
loop over the string s
if s[i] is a forward bracket, then push s[i] into the stack array
else write another if statement
if last item in the stack..stack[stack.length - 1] is equal to the key-value of the current iteration
then remove it from the end of the stack using pop
else push it into the stack

in the end check if the stack is empty...if it is return true
if its not then return false
    */

  let bracketObj = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const stack = [];

  if (s[0] === "}" || s[0] === ")" || s[0] === "]") return "NO";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === bracketObj[s[i]]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }

  if (!stack.length) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(matchingBrackets("{(([])[])[]}"));
