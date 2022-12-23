class Queue{
  constructor(){
    this.arr = []
  }
  added(value){
    this.arr.unshift(value);
    return this.arr;
  }
  pop(){
    this.arr.pop();
    return this.arr;
  }
  lookUp(){
    return this.arr[this.arr.length - 1];
  }
}

let queue = new Queue();
console.log(queue.added(96))
console.log(queue.added(25))
console.log(queue.added(20))
console.log(queue.added(100))
console.log(queue.added(5))
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.lookUp())
