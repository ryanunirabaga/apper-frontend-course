class Queue {
  constructor() {
    this.product = []
  }

  enqueue (product) {
    this.product.push(product)
  }

  dequeue () {
    const productLength = this.product.length
    if (productLength === 0)
      console.log("Queue is currently empty.")
    else
      this.product.shift()
  }

  check () {
    const stringProduct = this.product.join(", ")
    console.log(`[${stringProduct}]`)
  }
}

const my_queue = new Queue()
my_queue.enqueue('Milk')
my_queue.enqueue('Eggs')
my_queue.check()
my_queue.dequeue()
my_queue.check()
my_queue.dequeue()
my_queue.check()
my_queue.dequeue()
my_queue.dequeue()