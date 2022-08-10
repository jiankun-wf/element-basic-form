
export const is = (value, type = '') => {
    return Object.prototype.toString.call(value) === `[object ${type.slice(0,1).toLocaleUpperCase()}${type.slice(1)}]`
}
// is({}, 'object') 
// is({}, 'Object') 
//  都可以

const isFunc = (val) => is(val, 'function');
const isString = (val) => is(val, 'string');
const isNumber = (val) => is(val, 'number');
const isObject = (val) => is(val, 'object');
const isArray = (val) => is(val, 'array');
const isBoolean = (val) => is(val, 'boolean');
const isDef = (val) => val !== undefined || val !== null

export const useType = () => {
  return {
    is: {
       function: isFunc,
       array: isArray,
       object: isObject,
       number: isNumber,
       string: isString, 
       boolean: isBoolean,
       def: isDef,
    }
  }
}

