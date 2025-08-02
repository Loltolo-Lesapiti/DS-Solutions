const balance_brackets = (bracket) => {
  //Step 1: Declaring variables
  let stack = [];
  let p1 = -1;
  let p2 = 0;
  //Step 2: Push the opeing parenthisis into the stack
  for (par of bracket) {
    if (par === "(" || par === "{" || par === "[") {
      stack.push(par);
      p2 += 1;
      p1 += 1;
      continue;
    }
    //Step 3: Check if the parenthese match.
    if (
      (stack[p1] === "(" && bracket[p2] === ")") ||
      (stack[p1] === "[" && bracket[p2] === "]") ||
      (stack[p1] === "{" && bracket[p2] === "}")
    ) {
      stack.pop();
      p1 -= 1;
      p2 += 1;
    } else {
      break;
    }
  }
  //Step: Check if the stack is empty and return a boolean.
  return stack.length == 0;
};

console.log(balance_brackets("({[{()}]})"));
