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
    engueue(item){
        this.inStack.push(item)
    }

    eNqueue(){
        if(this.outStack === 0){
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