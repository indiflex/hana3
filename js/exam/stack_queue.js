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

  size() {
    return this.#arr?.length;
  }

  toString() {
    return `${this.constructor.name}(${this.size()}) ${JSON.stringify(
      this.#arr
    )}`;
  }

  print() {
    console.log(this.toString());
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

const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
console.log('🚀  stack:', stack.toString());
stack.push(3).push(5); // 추가하기
console.log('last pop=', stack.pop()); // 마지막에 추가된 하나 꺼내기
stack.print();

const queue = new Queue();
queue.enqueue(3).enqueue(5); // 추가하기
console.log('last queue=', queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
queue.print();
