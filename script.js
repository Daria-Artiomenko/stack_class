class Stack {
    constructor(maxSize = 10) {
      if (typeof maxSize !== 'number' || maxSize < 1) {
        throw new Error('Invalid maximum stack size');
      }
      this.maxSize = maxSize;
      this.stack = [];
    }
  
    push(elem) {
      if (this.stack.length >= this.maxSize) {
        throw new Error('Stack is full');
      }
      this.stack.push(elem);
    }
  
    pop() {
      if (this.stack.length === 0) {
        throw new Error('Stack is empty');
      }
      return this.stack.pop();
    }
  
    peek() {
      if (this.stack.length === 0) {
        return null;
      }
      return this.stack[this.stack.length - 1];
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  
    toArray() {
      return [...this.stack];
    }
  
    static fromIterable(iterable) {
      if (!iterable[Symbol.iterator]) {
        throw new Error('Iterable object is required');
      }
      const stack = new Stack(iterable.length);
      for (const elem of iterable) {
        stack.push(elem);
      }
      return stack;
    }
}

const stack = new Stack(6);




// console.log(stack.peek());

// stack.push(1);
// stack.push(3);
// stack.push(5);

// console.log(stack.toArray());
// console.log(stack.peek());
// console.log(stack.pop()); 
// console.log(stack.toArray()); 
// console.log(stack.isEmpty());


// const stackFromArray = Stack.fromIterable([1, 2, 3]);
// console.log(stackFromArray.toArray());

// const stackFromArray2 = Stack.fromIterable(4);
// console.log(stackFromArray2.toArray());