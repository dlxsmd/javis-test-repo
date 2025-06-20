/**
 * Array Utilities Module
 * Comprehensive array manipulation functions
 * 
 * @module ArrayUtils
 * @author Javis AI Assistant
 */

/**
 * Array utility functions
 */
const ArrayUtils = {

  /**
   * Chunks an array into smaller arrays of specified size
   * @param {Array} array - The array to chunk
   * @param {number} size - Size of each chunk
   * @returns {Array<Array>} Array of chunks
   * @example
   * ArrayUtils.chunk([1,2,3,4,5], 2) // [[1,2], [3,4], [5]]
   */
  chunk(array, size) {
    if (!Array.isArray(array) || size <= 0) return [];
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  },

  /**
   * Returns unique values from an array
   * @param {Array} array - The array to filter
   * @returns {Array} Array with unique values
   * @example
   * ArrayUtils.unique([1,2,2,3,3,3]) // [1,2,3]
   */
  unique(array) {
    if (!Array.isArray(array)) return [];
    return [...new Set(array)];
  },

  /**
   * Flattens a nested array to specified depth
   * @param {Array} array - The array to flatten
   * @param {number} depth - Depth to flatten (default: 1)
   * @returns {Array} Flattened array
   * @example
   * ArrayUtils.flatten([[1,2], [3,4]], 1) // [1,2,3,4]
   */
  flatten(array, depth = 1) {
    if (!Array.isArray(array)) return [];
    return depth > 0 ? array.reduce((acc, val) => 
      acc.concat(Array.isArray(val) ? this.flatten(val, depth - 1) : val), []) : array.slice();
  },

  /**
   * Shuffles an array randomly
   * @param {Array} array - The array to shuffle
   * @returns {Array} Shuffled array (new array)
   * @example
   * ArrayUtils.shuffle([1,2,3,4,5]) // [3,1,5,2,4] (random order)
   */
  shuffle(array) {
    if (!Array.isArray(array)) return [];
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  /**
   * Returns a random element from an array
   * @param {Array} array - The array to sample from
   * @returns {*} Random element
   * @example
   * ArrayUtils.sample([1,2,3,4,5]) // 3 (random)
   */
  sample(array) {
    if (!Array.isArray(array) || array.length === 0) return undefined;
    return array[Math.floor(Math.random() * array.length)];
  },

  /**
   * Returns multiple random elements from an array
   * @param {Array} array - The array to sample from
   * @param {number} count - Number of elements to sample
   * @returns {Array} Array of random elements
   * @example
   * ArrayUtils.sampleSize([1,2,3,4,5], 3) // [2,4,1] (random)
   */
  sampleSize(array, count) {
    if (!Array.isArray(array) || count <= 0) return [];
    const shuffled = this.shuffle(array);
    return shuffled.slice(0, Math.min(count, array.length));
  },

  /**
   * Groups array elements by a key function
   * @param {Array} array - The array to group
   * @param {Function|string} keyFn - Function to determine group key or property name
   * @returns {Object} Object with grouped elements
   * @example
   * ArrayUtils.groupBy([{age:20},{age:30},{age:20}], 'age') // {20: [{age:20},{age:20}], 30: [{age:30}]}
   */
  groupBy(array, keyFn) {
    if (!Array.isArray(array)) return {};
    const getKey = typeof keyFn === 'function' ? keyFn : (item) => item[keyFn];
    
    return array.reduce((groups, item) => {
      const key = getKey(item);
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
      return groups;
    }, {});
  },

  /**
   * Counts occurrences of each element
   * @param {Array} array - The array to count
   * @returns {Object} Object with counts
   * @example
   * ArrayUtils.countBy(['a','b','a','c','b','a']) // {a: 3, b: 2, c: 1}
   */
  countBy(array) {
    if (!Array.isArray(array)) return {};
    return array.reduce((counts, item) => {
      counts[item] = (counts[item] || 0) + 1;
      return counts;
    }, {});
  },

  /**
   * Returns the intersection of two arrays
   * @param {Array} array1 - First array
   * @param {Array} array2 - Second array
   * @returns {Array} Intersection of arrays
   * @example
   * ArrayUtils.intersection([1,2,3], [2,3,4]) // [2,3]
   */
  intersection(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return [];
    const set2 = new Set(array2);
    return array1.filter(item => set2.has(item));
  },

  /**
   * Returns the difference between two arrays
   * @param {Array} array1 - First array
   * @param {Array} array2 - Second array
   * @returns {Array} Elements in array1 but not in array2
   * @example
   * ArrayUtils.difference([1,2,3], [2,3,4]) // [1]
   */
  difference(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return [...(array1 || [])];
    const set2 = new Set(array2);
    return array1.filter(item => !set2.has(item));
  },

  /**
   * Returns the union of two arrays (unique elements from both)
   * @param {Array} array1 - First array
   * @param {Array} array2 - Second array
   * @returns {Array} Union of arrays
   * @example
   * ArrayUtils.union([1,2,3], [3,4,5]) // [1,2,3,4,5]
   */
  union(array1, array2) {
    if (!Array.isArray(array1) && !Array.isArray(array2)) return [];
    const combined = [...(array1 || []), ...(array2 || [])];
    return this.unique(combined);
  },

  /**
   * Removes falsy values from an array
   * @param {Array} array - The array to compact
   * @returns {Array} Array without falsy values
   * @example
   * ArrayUtils.compact([0, 1, false, 2, '', 3, null, 4, undefined, 5]) // [1,2,3,4,5]
   */
  compact(array) {
    if (!Array.isArray(array)) return [];
    return array.filter(Boolean);
  },

  /**
   * Returns the maximum value in an array
   * @param {Array} array - The array to search
   * @returns {*} Maximum value
   * @example
   * ArrayUtils.max([1,5,3,9,2]) // 9
   */
  max(array) {
    if (!Array.isArray(array) || array.length === 0) return undefined;
    return Math.max(...array);
  },

  /**
   * Returns the minimum value in an array
   * @param {Array} array - The array to search
   * @returns {*} Minimum value
   * @example
   * ArrayUtils.min([1,5,3,9,2]) // 1
   */
  min(array) {
    if (!Array.isArray(array) || array.length === 0) return undefined;
    return Math.min(...array);
  },

  /**
   * Returns the sum of all numbers in an array
   * @param {Array<number>} array - The array to sum
   * @returns {number} Sum of all numbers
   * @example
   * ArrayUtils.sum([1,2,3,4,5]) // 15
   */
  sum(array) {
    if (!Array.isArray(array)) return 0;
    return array.reduce((sum, num) => sum + (typeof num === 'number' ? num : 0), 0);
  },

  /**
   * Returns the average of all numbers in an array
   * @param {Array<number>} array - The array to average
   * @returns {number} Average of all numbers
   * @example
   * ArrayUtils.average([1,2,3,4,5]) // 3
   */
  average(array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    const numbers = array.filter(item => typeof item === 'number');
    if (numbers.length === 0) return 0;
    return this.sum(numbers) / numbers.length;
  },

  /**
   * Rotates array elements to the left by n positions
   * @param {Array} array - The array to rotate
   * @param {number} positions - Number of positions to rotate (default: 1)
   * @returns {Array} Rotated array
   * @example
   * ArrayUtils.rotateLeft([1,2,3,4,5], 2) // [3,4,5,1,2]
   */
  rotateLeft(array, positions = 1) {
    if (!Array.isArray(array) || array.length === 0) return [];
    const len = array.length;
    const shift = ((positions % len) + len) % len;
    return [...array.slice(shift), ...array.slice(0, shift)];
  },

  /**
   * Rotates array elements to the right by n positions
   * @param {Array} array - The array to rotate
   * @param {number} positions - Number of positions to rotate (default: 1)
   * @returns {Array} Rotated array
   * @example
   * ArrayUtils.rotateRight([1,2,3,4,5], 2) // [4,5,1,2,3]
   */
  rotateRight(array, positions = 1) {
    if (!Array.isArray(array) || array.length === 0) return [];
    return this.rotateLeft(array, -positions);
  }
};

export default ArrayUtils;
