const randomInteger = require('random-int');

function generateArrayWithNumbers(length){
    return new Array(length)
        .fill(0)
        .map(() => randomInteger.default(-100, 100))
}



class MyQueue {
    constructor(elements){
        this.elements = elements;
    }
    count(){
        return this.elements.length;
    }
    add(element){
        this.elements.unshift(element);
        return element;
    }
    getAllElements(){
        return this.elements;
    }
    delete(){
        if(this.elements.length == 0){
            throw new Error('The queue is empty');
        }
        return this.elements.shift();
    }
}

const queue = new MyQueue(generateArrayWithNumbers(3));

console.log(queue.count());
console.log(queue.getAllElements());
console.log(queue.add(12));
console.log(queue.getAllElements());
console.log(queue.delete());
console.log(queue.getAllElements());
console.log(queue.delete());
console.log(queue.delete());
console.log(queue.delete());
console.log(queue.delete());