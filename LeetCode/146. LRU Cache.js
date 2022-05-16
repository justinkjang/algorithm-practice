// 05 16 2022
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // moving key to MRU
  if (this.get(key) === -1) {
    if (this.map.size === this.capacity) {
      for (let keyVal of this.map) {
        this.map.delete(keyVal[0]);
        break;
      }
    }
  }
  this.map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// Time: 1
// Space: 1

// class constructor form
//

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (this.map.has(key)) {
      let val = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, val);
      return val;
    } else {
      return -1;
    }
  }

  put(key, val) {
    if (this.get(key) === -1) {
      if (this.capacity === this.map.size) {
        for (let keyVal of this.map) {
          this.map.delete(keyVal[0]);
          break;
        }
      }
    }
    this.map.set(key, val);
  }
}

// let test = new LRUCache(3);
// test.map.set('a', 1).set('b', 2).set('c', 3);
// console.log(test);

// test.put('d', 7);

// console.log(test);
