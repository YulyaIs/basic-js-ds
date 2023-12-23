const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {     // запомнить
  constructor () {
    this.data = [];     // массив
    this.top = 0;     // индекс верхнего элемента
  }
  push(element) {
    this.data[this.top] = element;    // сохранить в верхей позиции
    this.top = this.top + 1;    // увеличить индекс
    return this.top + 1;
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  pop() {
    this.top = this.top -1;     // удаляем из верхней позиции и уменьшаем индекс
    return this.data.pop();
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  peek() {
    return this.data[this.top - 1];     // пустая верхняя позиция
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
