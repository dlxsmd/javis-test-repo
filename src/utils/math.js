/**
 * Math Utilities Module
 * Advanced mathematical functions and utilities
 * 
 * @module MathUtils
 * @author Javis AI Assistant
 */

/**
 * Math utility functions
 */
const MathUtils = {

  /**
   * Generates a random number between min and max (inclusive)
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   * @returns {number} Random number
   * @example
   * MathUtils.random(1, 10) // 7 (random between 1-10)
   */
  random(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') return 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   * Generates a random float between min and max
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   * @param {number} decimals - Number of decimal places (default: 2)
   * @returns {number} Random float
   * @example
   * MathUtils.randomFloat(1, 10, 2) // 7.34 (random float)
   */
  randomFloat(min, max, decimals = 2) {
    if (typeof min !== 'number' || typeof max !== 'number') return 0;
    const random = Math.random() * (max - min) + min;
    return parseFloat(random.toFixed(decimals));
  },

  /**
   * Calculates the average of an array of numbers
   * @param {Array<number>} numbers - Array of numbers
   * @returns {number} Average value
   * @example
   * MathUtils.average([1,2,3,4,5]) // 3
   */
  average(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) return 0;
    const validNumbers = numbers.filter(n => typeof n === 'number' && !isNaN(n));
    if (validNumbers.length === 0) return 0;
    return validNumbers.reduce((sum, num) => sum + num, 0) / validNumbers.length;
  },

  /**
   * Calculates the median of an array of numbers
   * @param {Array<number>} numbers - Array of numbers
   * @returns {number} Median value
   * @example
   * MathUtils.median([1,2,3,4,5]) // 3
   */
  median(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) return 0;
    const validNumbers = numbers.filter(n => typeof n === 'number' && !isNaN(n));
    if (validNumbers.length === 0) return 0;
    
    const sorted = validNumbers.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    
    return sorted.length % 2 !== 0 
      ? sorted[mid] 
      : (sorted[mid - 1] + sorted[mid]) / 2;
  },

  /**
   * Calculates the mode of an array of numbers
   * @param {Array<number>} numbers - Array of numbers
   * @returns {Array<number>} Most frequent values
   * @example
   * MathUtils.mode([1,2,2,3,3,3]) // [3]
   */
  mode(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) return [];
    
    const frequency = {};
    let maxFreq = 0;
    
    numbers.forEach(num => {
      if (typeof num === 'number' && !isNaN(num)) {
        frequency[num] = (frequency[num] || 0) + 1;
        maxFreq = Math.max(maxFreq, frequency[num]);
      }
    });
    
    return Object.keys(frequency)
      .filter(num => frequency[num] === maxFreq)
      .map(num => parseFloat(num));
  },

  /**
   * Calculates the standard deviation of an array of numbers
   * @param {Array<number>} numbers - Array of numbers
   * @returns {number} Standard deviation
   * @example
   * MathUtils.standardDeviation([1,2,3,4,5]) // 1.58
   */
  standardDeviation(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) return 0;
    
    const validNumbers = numbers.filter(n => typeof n === 'number' && !isNaN(n));
    if (validNumbers.length === 0) return 0;
    
    const avg = this.average(validNumbers);
    const squaredDiffs = validNumbers.map(num => Math.pow(num - avg, 2));
    const avgSquaredDiff = this.average(squaredDiffs);
    
    return Math.sqrt(avgSquaredDiff);
  },

  /**
   * Rounds a number to specified decimal places
   * @param {number} number - Number to round
   * @param {number} decimals - Number of decimal places
   * @returns {number} Rounded number
   * @example
   * MathUtils.round(3.14159, 2) // 3.14
   */
  round(number, decimals = 0) {
    if (typeof number !== 'number') return 0;
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
  },

  /**
   * Clamps a number between min and max values
   * @param {number} number - Number to clamp
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   * @returns {number} Clamped number
   * @example
   * MathUtils.clamp(15, 0, 10) // 10
   */
  clamp(number, min, max) {
    if (typeof number !== 'number') return min || 0;
    return Math.min(Math.max(number, min), max);
  },

  /**
   * Calculates the percentage of a value relative to a total
   * @param {number} value - The value
   * @param {number} total - The total
   * @returns {number} Percentage
   * @example
   * MathUtils.percentage(25, 100) // 25
   */
  percentage(value, total) {
    if (typeof value !== 'number' || typeof total !== 'number' || total === 0) return 0;
    return (value / total) * 100;
  },

  /**
   * Calculates the greatest common divisor of two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} GCD
   * @example
   * MathUtils.gcd(48, 18) // 6
   */
  gcd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return 0;
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  },

  /**
   * Calculates the least common multiple of two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} LCM
   * @example
   * MathUtils.lcm(4, 6) // 12
   */
  lcm(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return 0;
    return Math.abs(a * b) / this.gcd(a, b);
  },

  /**
   * Checks if a number is prime
   * @param {number} number - Number to check
   * @returns {boolean} True if prime, false otherwise
   * @example
   * MathUtils.isPrime(17) // true
   */
  isPrime(number) {
    if (typeof number !== 'number' || number < 2) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) return false;
    }
    return true;
  },

  /**
   * Calculates factorial of a number
   * @param {number} number - Number to calculate factorial for
   * @returns {number} Factorial result
   * @example
   * MathUtils.factorial(5) // 120
   */
  factorial(number) {
    if (typeof number !== 'number' || number < 0) return 0;
    if (number === 0 || number === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  },

  /**
   * Calculates nth Fibonacci number
   * @param {number} n - Position in Fibonacci sequence
   * @returns {number} Fibonacci number
   * @example
   * MathUtils.fibonacci(10) // 55
   */
  fibonacci(n) {
    if (typeof n !== 'number' || n < 0) return 0;
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  },

  /**
   * Converts degrees to radians
   * @param {number} degrees - Degrees to convert
   * @returns {number} Radians
   * @example
   * MathUtils.degreesToRadians(180) // 3.14159
   */
  degreesToRadians(degrees) {
    if (typeof degrees !== 'number') return 0;
    return degrees * (Math.PI / 180);
  },

  /**
   * Converts radians to degrees
   * @param {number} radians - Radians to convert
   * @returns {number} Degrees
   * @example
   * MathUtils.radiansToDegrees(Math.PI) // 180
   */
  radiansToDegrees(radians) {
    if (typeof radians !== 'number') return 0;
    return radians * (180 / Math.PI);
  },

  /**
   * Calculates distance between two points
   * @param {Object} point1 - First point {x, y}
   * @param {Object} point2 - Second point {x, y}
   * @returns {number} Distance
   * @example
   * MathUtils.distance({x:0,y:0}, {x:3,y:4}) // 5
   */
  distance(point1, point2) {
    if (!point1 || !point2 || typeof point1.x !== 'number' || typeof point1.y !== 'number' ||
        typeof point2.x !== 'number' || typeof point2.y !== 'number') {
      return 0;
    }
    
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
};

export default MathUtils;
