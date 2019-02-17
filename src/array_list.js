const defComparer = (r, l) => r === l

class ArrayList {
  constructor() {
    this._list = null
  }
  /**
   * insert
   * @param obj is the data to be inserted at the head of the list
   * @return {void}
   */
  insert(obj) {
    if (this._list === null) {
      this._list = new Array()
    }
    this._list.push(obj)
  }

  /**
   * find
   * @param obj data we are looking for
   * @param comparer is a function used to find the data
   * @return {data of the found object}
   */
  find(obj, comparer = defComparer) {
    return this._list.find(el => comparer(el, obj))
  }

  /**
   * remove
   * @param obj is the data to be removed
   * @param comparer is a function used to compare equality
   * @return {void}
   */
  remove(obj, comparer = defComparer) {
    const index = this._list.findIndex(el => comparer(el, obj))
    if (index > -1 && index < this._list.length) {
      this._list = this._list
        .slice(0, index)
        .concat(this._list.slice(index + 1))
    }
  }

  /**
   * size
   * @return {number} number of elements in the list
   */
  get size() {
    return this._list.length
  }

  /**
   * toArray
   * @return {Array} Array of objects
   */
  toArray() {
    return this._list.slice()
  }
}

export default ArrayList
