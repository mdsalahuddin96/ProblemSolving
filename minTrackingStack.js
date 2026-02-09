function processCouponStackOperations(operations) {
  const stack = [];
  const minStack = [];
  const result = [];

  for (let op of operations) {
    const parts = op.split(" ");

    if (parts[0] === "push") {
      const val = Number(parts[1]);
      stack.push(val);

      // maintain min stack
      if (minStack.length === 0 || val <= minStack[minStack.length - 1]) {
        minStack.push(val);
      }
    }

    else if (parts[0] === "pop") {
      const removed = stack.pop();
      if (removed === minStack[minStack.length - 1]) {
        minStack.pop();
      }
    }

    else if (parts[0] === "top") {
      result.push(stack[stack.length - 1]);
    }

    else if (parts[0] === "getMin") {
      result.push(minStack[minStack.length - 1]);
    }
  }

  return result;
}

console.log(processCouponStackOperations([
  'push 2','push 0','push 3','push 0',
  'getMin','pop','getMin','pop','top','getMin'
]));

//console.log(processCouponStackOperations(['push 5','getMin']));