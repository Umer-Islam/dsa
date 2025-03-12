class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toLocaleString());
  }
}

let things = new Queue();
// things.isEmpty();
console.log(things.isEmpty());
things.enqueue("first element");

things.enqueue("second element");
console.log(things.size());
things.print();

console.log(things.isEmpty());
