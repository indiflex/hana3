// const assert = require('assert'); // CJS
import assert from 'assert'; // ESM

class Collection {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args;
  }

  get _arr() {
    return this.#arr;
  }

  push(value) {
    this.#arr.push(value);
    return this;
  }

  get peek() {
    return this.#arr.at(-1);
  }

  get poll() {
    if (this.#isQueue()) {
      return this.dequeue();
    } else {
      return this.#arr.pop();
    }
  }

  clear() {
    this.#arr = []; // 또는 this.#arr.length = 0;
  }

  toArray() {
    return [...this.#arr]; // 또는 this.#arr.slice(0)
  }

  remove() {
    this.#arr.pop();
  }

  get peek() {
    return this.#arr.at(-1);
  }

  get poll() {
    if (this.#isQueue()) {
      return this.dequeue();
    } else {
      return this.#arr.pop();
    }
  }

  get isEmpty() {
    return !!this.length;
  }

  #isQueue() {
    return this.constructor.name === 'Queue';
  }

  get size() {
    return this.#arr?.length;
  }

  // toString() {
  //   return `${this.constructor.name}(${this.size}) ${JSON.stringify(
  //     this.#arr
  //   )}`;
  // }
}

class Stack extends Collection {
  pop() {
    return this._arr.pop();
  }
}

class Queue extends Collection {
  enqueue(value) {
    this.push(value);
    return this;
  }

  dequeue() {
    return this._arr.shift();
  }
}

// 아래 코드가 오류가 없으면 통과!
const stack = new Stack();
stack.push(1).push(2).push(3).push(5);
assert.deepStrictEqual(stack.toArray(), [1, 2, 3, 5]);
stack.pop();
assert.strictEqual(stack.peek, 3);
stack.remove();
assert.strictEqual(stack.poll, 2);
assert.deepStrictEqual(stack.toArray(), [1]);

const queue = new Queue();
queue.enqueue(1).enqueue(3).enqueue(5);
queue.dequeue();
assert.deepStrictEqual(queue.toArray(), [3, 5]);
assert.strictEqual(queue.poll, 3);
assert.deepStrictEqual(queue.toArray(), [5]);

if (!stack.isEmpty) stack.clear();
if (queue.size) queue.clear();
assert.deepStrictEqual(stack.toArray(), []);
assert.deepStrictEqual(queue.toArray(), []);
