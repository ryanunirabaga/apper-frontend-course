class Stack {
  constructor() {
    this.item = []
  }

  push(item) {
    this.item.push(item)
  }

  check() {
    console.log(this.item)
  }

  pop() {
    const itemArray = this.item

    if (itemArray.length === 0) {
      console.log('Stack is currently empty.')
      return
    }
    return itemArray.pop()

  }
}

const stack = new Stack()
stack.push('Milk')
stack.push('Eggs')
stack.check() // [“Milk”, “Eggs”]
stack.pop()
stack.check() // [“Milk”]
stack.pop()
stack.check() // []
stack.pop() // “Stack is currently empty.”