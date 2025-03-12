class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front]; // store the value before deleting to return
    delete this.items[this.front];
    this.front++;
    return item;
  }
  print() {
    console.log(this.items);
  }
}
const que = new Queue();
que.enqueue(454);
que.print();
console.log("this return the value of deleted key value pair" + que.dequeue());
que.print();
