/**
 * created by Arthur Anderson Feb 2019
 */

import SingleNode from '@bears-garden/single-node'

const defComparer = (r, l) => r === l

class SingleNodeList {
  constructor() {
    this._list = null
    this._size = 0
  }
  /**
   * insert
   * @param obj is the data to be inserted at the head of the list
   * @return {void}
   */
  insert(obj) {
    if (this._list === null) {
      this._list = SingleNode.create_node(obj)
    } else {
      this._list = SingleNode.insert(this._list, obj)
    }
    this._size = this._size + 1
  }

  /**
   * find
   * @param obj data we are looking for
   * @param comparer is a function used to find the data
   * @return {data of the found object}
   */
  find(obj, comparer = defComparer) {
    const foundNode = SingleNode.find_node(this._list, obj, comparer)
    return foundNode ? foundNode.data : null
  }

  /**
   * remove
   * @param obj is the data to be removed
   * @param comparer is a function used to compare equality
   * @return {void}
   */
  remove(obj, comparer = defComparer) {
    const node = SingleNode.find_node(this._list, obj, comparer)
    if (node) {
      this._list = SingleNode.remove_node(this._list, node)
      this._size = this._size - 1
    }
  }

  /**
   * size
   * @return {number} number of elements in the list
   */
  get size() {
    return this._size
  }

  /**
   * toArray
   * @return {Array} Array of objects
   */
  toArray() {
    return SingleNode.toArray(this._list)
  }
}

export default SingleNodeList
