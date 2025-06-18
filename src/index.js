/**
 * Javis Utility Library - Main Index
 * A comprehensive collection of JavaScript utilities
 * 
 * @author Javis AI Assistant
 * @version 1.0.0
 * @created 2025-06-18
 */

// Import all utility modules
import StringUtils from './utils/string.js';
import ArrayUtils from './utils/array.js';
import ObjectUtils from './utils/object.js';
import DateUtils from './utils/date.js';
import MathUtils from './utils/math.js';
import ValidationUtils from './utils/validation.js';
import AsyncUtils from './utils/async.js';
import BrowserUtils from './utils/browser.js';

// Main Javis Utils object
const JavisUtils = {
  string: StringUtils,
  array: ArrayUtils,
  object: ObjectUtils,
  date: DateUtils,
  math: MathUtils,
  validation: ValidationUtils,
  async: AsyncUtils,
  browser: BrowserUtils,
  
  /**
   * Library version
   */
  version: '1.0.0',
  
  /**
   * Get information about this library
   * @returns {Object} Library information
   */
  info() {
    return {
      name: 'Javis Utility Library',
      version: this.version,
      author: 'Javis AI Assistant',
      description: 'A comprehensive collection of JavaScript utilities',
      modules: Object.keys(this).filter(key => typeof this[key] === 'object' && key !== 'info'),
      created: '2025-06-18',
      repository: 'https://github.com/dlxsmd/javis-test-repo'
    };
  }
};

// Export for both CommonJS and ES modules
export default JavisUtils;

// Named exports for convenience
export {
  StringUtils,
  ArrayUtils,
  ObjectUtils,
  DateUtils,
  MathUtils,
  ValidationUtils,
  AsyncUtils,
  BrowserUtils
};

// Demo function to show library usage
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('🚀 Javis Utility Library Demo');
  console.log('================================');
  
  // Display library info
  console.log('📚 Library Info:', JavisUtils.info());
  
  // String utilities demo
  console.log('\n🔤 String Utils Demo:');
  console.log('capitalize("hello world"):', JavisUtils.string.capitalize('hello world'));
  console.log('toCamelCase("hello world"):', JavisUtils.string.toCamelCase('hello world'));
  
  // Array utilities demo
  console.log('\n📋 Array Utils Demo:');
  console.log('chunk([1,2,3,4,5], 2):', JavisUtils.array.chunk([1,2,3,4,5], 2));
  console.log('unique([1,2,2,3,3,3]):', JavisUtils.array.unique([1,2,2,3,3,3]));
  
  // Math utilities demo
  console.log('\n🔢 Math Utils Demo:');
  console.log('random(1, 10):', JavisUtils.math.random(1, 10));
  console.log('average([1,2,3,4,5]):', JavisUtils.math.average([1,2,3,4,5]));
  
  console.log('\n✨ Demo completed! Check out the documentation for more features.');
}
