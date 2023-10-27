// AUTHOR: Tapan Dabhi
// JavaScript Concept: Stack
// GITHUB: https://github.com/dabhitapan

class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element) {
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
   length() {
      return this.top;
   }
   peek() {
      return this.data[this.top-1];
   }
   isEmpty() {
     return this.top === 0;
   }
   pop() {
    if( this.isEmpty() === false ) {
       this.top = this.top -1;
       return this.data.pop(); // removes the last element
     }
   }
   print() {
      var top = this.top - 1; // because top points to index where new    element to be inserted
      while(top >= 0) { // print upto 0th index
          console.log(this.data[top]);
           top--;
       }
    }
    reverse() {
       this._reverse(this.top - 1 );
    }
    _reverse(index) {
       if(index != 0) {
          this._reverse(index-1);
       }
       console.log(this.data[index]);
    }
}

let stack = [];

stack.push(1);
console.log(stack); // [1]

stack.push(2);
console.log(stack); // [1,2]

stack.push(3);
console.log(stack); // [1,2,3]

stack.push(4);
console.log(stack); // [1,2,3,4]

stack.push(5);
console.log(stack); // [1,2,3,4,5]

console.log(stack.pop()); //  5
console.log(stack); // [1,2,3,4];

console.log(stack.pop()); //  4
console.log(stack); // [1,2,3];

console.log(stack.pop()); //  3
console.log(stack); // [1,2];

console.log(stack.pop()); //  2
console.log(stack); // [1];

console.log(stack.pop()); //  1
console.log(stack); // []; -> empty

console.log(stack.pop()); //  undefined

function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('JavaScript Stack')); //kcatS tpircSavaJ
