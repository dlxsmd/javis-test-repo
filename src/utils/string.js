/**
 * String Utilities Module
 * Comprehensive string manipulation functions
 * 
 * @module StringUtils
 * @author Javis AI Assistant
 */

/**
 * String utility functions
 */
const StringUtils = {
  
  /**
   * Capitalizes the first letter of a string
   * @param {string} str - The string to capitalize
   * @returns {string} The capitalized string
   * @example
   * StringUtils.capitalize('hello world') // 'Hello world'
   */
  capitalize(str) {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  /**
   * Converts string to camelCase
   * @param {string} str - The string to convert
   * @returns {string} The camelCase string
   * @example
   * StringUtils.toCamelCase('hello world') // 'helloWorld'
   */
  toCamelCase(str) {
    if (!str || typeof str !== 'string') return '';
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  },

  /**
   * Converts string to PascalCase
   * @param {string} str - The string to convert
   * @returns {string} The PascalCase string
   * @example
   * StringUtils.toPascalCase('hello world') // 'HelloWorld'
   */
  toPascalCase(str) {
    if (!str || typeof str !== 'string') return '';
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, word => word.toUpperCase()).replace(/\s+/g, '');
  },

  /**
   * Converts string to kebab-case
   * @param {string} str - The string to convert
   * @returns {string} The kebab-case string
   * @example
   * StringUtils.toKebabCase('hello world') // 'hello-world'
   */
  toKebabCase(str) {
    if (!str || typeof str !== 'string') return '';
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase();
  },

  /**
   * Converts string to snake_case
   * @param {string} str - The string to convert
   * @returns {string} The snake_case string
   * @example
   * StringUtils.toSnakeCase('hello world') // 'hello_world'
   */
  toSnakeCase(str) {
    if (!str || typeof str !== 'string') return '';
    return str
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      .replace(/\s+/g, '_')
      .toLowerCase();
  },

  /**
   * Truncates a string to a specified length
   * @param {string} str - The string to truncate
   * @param {number} length - Maximum length (default: 50)
   * @param {string} suffix - Suffix to add (default: '...')
   * @returns {string} The truncated string
   * @example
   * StringUtils.truncate('This is a long string', 10) // 'This is a ...'
   */
  truncate(str, length = 50, suffix = '...') {
    if (!str || typeof str !== 'string') return '';
    if (str.length <= length) return str;
    return str.substring(0, length - suffix.length) + suffix;
  },

  /**
   * Removes all whitespace from a string
   * @param {string} str - The string to clean
   * @returns {string} String without whitespace
   * @example
   * StringUtils.removeWhitespace('hello world test') // 'helloworldtest'
   */
  removeWhitespace(str) {
    if (!str || typeof str !== 'string') return '';
    return str.replace(/\s+/g, '');
  },

  /**
   * Reverses a string
   * @param {string} str - The string to reverse
   * @returns {string} The reversed string
   * @example
   * StringUtils.reverse('hello') // 'olleh'
   */
  reverse(str) {
    if (!str || typeof str !== 'string') return '';
    return str.split('').reverse().join('');
  },

  /**
   * Checks if a string is a palindrome
   * @param {string} str - The string to check
   * @returns {boolean} True if palindrome, false otherwise
   * @example
   * StringUtils.isPalindrome('racecar') // true
   */
  isPalindrome(str) {
    if (!str || typeof str !== 'string') return false;
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  },

  /**
   * Counts the number of words in a string
   * @param {string} str - The string to count words in
   * @returns {number} Number of words
   * @example
   * StringUtils.wordCount('hello world test') // 3
   */
  wordCount(str) {
    if (!str || typeof str !== 'string') return 0;
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
  },

  /**
   * Extracts all URLs from a string
   * @param {string} str - The string to search
   * @returns {Array<string>} Array of found URLs
   * @example
   * StringUtils.extractUrls('Visit https://example.com') // ['https://example.com']
   */
  extractUrls(str) {
    if (!str || typeof str !== 'string') return [];
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return str.match(urlRegex) || [];
  },

  /**
   * Escapes HTML special characters
   * @param {string} str - The string to escape
   * @returns {string} HTML-escaped string
   * @example
   * StringUtils.escapeHtml('<div>test</div>') // '&lt;div&gt;test&lt;/div&gt;'
   */
  escapeHtml(str) {
    if (!str || typeof str !== 'string') return '';
    const htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return str.replace(/[&<>"']/g, match => htmlEscapes[match]);
  },

  /**
   * Generates a random string of specified length
   * @param {number} length - Length of the string (default: 10)
   * @param {string} charset - Character set to use (default: alphanumeric)
   * @returns {string} Random string
   * @example
   * StringUtils.random(8) // 'A8k2Lp9x'
   */
  random(length = 10, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
  },

  /**
   * Slugifies a string (URL-friendly)
   * @param {string} str - The string to slugify
   * @returns {string} Slugified string
   * @example
   * StringUtils.slugify('Hello World!') // 'hello-world'
   */
  slugify(str) {
    if (!str || typeof str !== 'string') return '';
    return str
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }
};

export default StringUtils;
