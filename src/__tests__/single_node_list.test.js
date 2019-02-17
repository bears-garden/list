/**
 * created by Arthur Anderson Feb 2019
 */
import SingleNodeList from '../single_node_list'

const fillList = (list, size) => {
  for (let i = 0; i < size; i++) {
    list.insert(i)
  }
}
const fillArray = (arr, size) => {
  for (let i = 0; i < size; i++) {
    arr.push(i)
  }
}

class Timer {
  constructor() {
    this.startTime = Date.now()
    this.endTime = 0
  }
  stop(msg) {
    this.endTime = Date.now()
    return `Timer: ${msg} ${this.endTime - this.startTime}`
  }
}

describe('SingleNodeList', () => {
  describe('SingleNodeList basic functions', () => {
    let list = null
    beforeAll(() => {
      list = new SingleNodeList()
    })
    test('list.insert', () => {
      list.insert(2)
      expect(list.size).toEqual(1)
    })
    test('list.size === 1', () => {
      expect(list.size).toEqual(1)
    })
    test('list.find(2) === 2', () => {
      expect(list.find(2)).toEqual(2)
    })
    test('list.remove(2); size() === 0', () => {
      list.remove(2)
      expect(list.size).toEqual(0)
    })
  })

  describe('SingleNodeList run with 100 items', () => {
    test('list.size === 100', () => {
      const list = new SingleNodeList()
      const timer = new Timer()
      fillList(list, 100)
      expect(list.size).toEqual(100)
      console.log(timer.stop('100 list'))
    })
    test('arr.size === 100', () => {
      const arr = new Array()
      const timer = new Timer()
      fillArray(arr, 100)
      expect(arr.length).toEqual(100)
      console.log(timer.stop('100 array'))
    })
  })
  describe('SingleNodeList run with 1000 items', () => {
    test('list.size === 1000', () => {
      const list = new SingleNodeList()
      const timer = new Timer()
      fillList(list, 1000)
      expect(list.size).toEqual(1000)
      console.log(timer.stop('1000 list'))
    })
    test('arr.size === 1000', () => {
      const arr = new Array()
      const timer = new Timer()
      fillArray(arr, 1000)
      expect(arr.length).toEqual(1000)
      console.log(timer.stop('1000 array'))
    })
  })
  describe('SingleNodeList run with 10000 items', () => {
    test('list.size === 10000', () => {
      const list = new SingleNodeList()
      const timer = new Timer()
      fillList(list, 10000)
      expect(list.size).toEqual(10000)
      console.log(timer.stop('1000 list'))
    })
    test('arr.size === 10000', () => {
      const arr = new Array()
      const timer = new Timer()
      fillArray(arr, 10000)
      expect(arr.length).toEqual(10000)
      console.log(timer.stop('10000 array'))
    })
  })
  describe('SingleNodeList run with 100000 items', () => {
    test('list.size === 100000', () => {
      const list = new SingleNodeList()
      const timer = new Timer()
      fillList(list, 100000)
      expect(list.size).toEqual(100000)
      console.log(timer.stop('100000 list'))
    })
    test('arr.size === 100000', () => {
      const arr = new Array()
      const timer = new Timer()
      fillArray(arr, 100000)
      expect(arr.length).toEqual(100000)
      console.log(timer.stop('100000 array'))
    })
  })
  describe('SingleNodeList run with 1000000 items', () => {
    test('list.size === 1000000', () => {
      const list = new SingleNodeList()
      const timer = new Timer()
      fillList(list, 1000000)
      expect(list.size).toEqual(1000000)
      console.log(timer.stop('1000000 list'))
    })
    test('arr.size === 1000000', () => {
      const arr = new Array()
      const timer = new Timer()
      fillArray(arr, 1000000)
      expect(arr.length).toEqual(1000000)
      console.log(timer.stop('1000000 array'))
    })
  })
  describe('SingleNodeList run with 10000000 items', () => {
    test('list.size === 10000000', () => {
      const list = new SingleNodeList()
      const timer = new Timer()
      fillList(list, 10000000)
      expect(list.size).toEqual(10000000)
      console.log(timer.stop('10000000 list'))
    })
    test('arr.size === 10000000', () => {
      const arr = new Array()
      const timer = new Timer()
      fillArray(arr, 10000000)
      expect(arr.length).toEqual(10000000)
      console.log(timer.stop('10000000 array'))
    })
  })
})
