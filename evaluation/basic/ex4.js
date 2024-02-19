// import assert from 'assert'; // ESM
const assert = require('assert'); // CJS

class Collection {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args;
    // this.#arr = args;
    // new Stack(1, 2, 3); // [1,2,3]
    // new Stack([1, 2, 3]); // [ [1,2,3] ]
  }
  get _arr() {
    return this.#arr;
  }
  push(value) {
    this.#arr.push(value);
    return this;
  }

  // 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!)
  get peek() {
    return this.#arr.at(this.isStack() ? -1 : 0);
  }

  isStack() {
    return this.constructor.name === 'Stack';
  }

  // 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제
  get poll() {
    return this.#arr.splice(this.isStack() ? -1 : 0, 1)[0];
  }
  // 모든 원소 지우기
  clear() {
    this.#arr.splice(0, this.size);
  }
  // array 타입 반환
  toArray() {
    return [...this.#arr];
  }
  // 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(skip)
  remove() {
    this.#arr.splice(this.isStack() ? -1 : 0, 1);
  }
  // 원소가 하나도 없으면 true
  get isEmpty() {
    return this.#arr.length === 0;
  }
  // 현재 원소의 개수
  get size() {
    return this.#arr.length;
  }
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

const stack = new Stack();
stack.push(1).push(2).push(3).push(5);
assert.deepStrictEqual(stack.toArray(), [1, 2, 3, 5]);
stack.pop(); // [1,2,3]
assert.strictEqual(stack.peek, 3); // 3 반환
stack.remove(); // 3 삭제
assert.strictEqual(stack.poll, 2); // 2 삭제
assert.deepStrictEqual(stack.toArray(), [1]);

const queue = new Queue();
queue.enqueue(1).enqueue(3).enqueue(5); // [1, 3, 5]
queue.dequeue(); // [3, 5]
assert.deepStrictEqual(queue.toArray(), [3, 5]);
assert.strictEqual(queue.poll, 3);
assert.deepStrictEqual(queue.toArray(), [5]);
if (!stack.isEmpty) stack.clear();
if (queue.size) queue.clear();
assert.deepStrictEqual(stack.toArray(), []);
assert.deepStrictEqual(queue.toArray(), []);
