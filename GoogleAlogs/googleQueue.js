/*
Let 's call our stacks inStack and outStack.

For enqueue, we simply push the enqueued item onto inStack.

For dequeue on an empty outStack, the oldest item is at the bottom of inStack.So we dig to the bottom of inStack by pushing each item one - by - one onto outStack until we reach the bottom item, which we
return.

After moving everything from inStack to outStack, the item that was enqueued the 2n d longest ago(after the item we just returned) is at the top of outStack, the item enqueued 3 rd longest ago is just below it, etc.So to dequeue on a non - empty outStack, we simply
return the top item from outStack.
*/

class QueueTwoStacks {
    constructor() {
        this.inStack = [];
        this.outStack = [];

    }
    enqueue(item){
        this.inStack.push(item)
    }

    dequeue(){
        if(this.outStack.length === 0){
            //move itmes from inStack to outStack, reversing order
            while(this.inStack.length > 0){
                const newsInStackItem = this.inStack.pop()
                this.outStack.push(newsInStackItem);
            }
            // if outStack is still empty, raise an error
            if(this.outStack.length === 0){
                throw new Error("Can't dequeue from empty queue")
            }
        }
        return this.outStack.pop();
    }
}

//Complexity O(1) Time total run time O(m)

// Tests cases
const q = new QueueTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

let desc = 'dequeue #1';
let actual = q.dequeue();
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'dequeue #2';
actual = q.dequeue();
expected = 2;
assertEquals(actual, expected, desc);

q.enqueue(4);

desc = 'dequeue #3';
actual = q.dequeue();
expected = 3;
assertEquals(actual, expected, desc);

desc = 'dequeue #4';
actual = q.dequeue();
expected = 4;
assertEquals(actual, expected, desc);

desc = 'dequeue from empty queue';
const emptyDequeue = () => q.dequeue();
assertThrowsError(emptyDequeue, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}

function assertThrowsError(func, desc) {
    try {
        func();
        console.log(`${desc} ... FAIL`);
    } catch (e) {
        console.log(`${desc} ... PASS`);
    }
}