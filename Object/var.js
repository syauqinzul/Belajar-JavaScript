var i = 10;
var j = 20;

export { i, j };
export default { i, j };
export const k = 30;
export function sum() {
  return i + j + k;
} 

export class MyClass {
  constructor() {
    this.value = i + j + k;
  } 
  getValue() {
    return this.value;
  }

}
export const nested = {
  a: i,
  b: j,
  c: k,
  getSum: sum
};

export const array = [i, j, k];

export const arrowFunc = () => i + j + k;
export const templateString = `Values are: i=${i}, j=${j}, k=${k}`;
export const destructured = (({ x, y }) => x + y)({ x: i, y: j });
export const computedProp = {
  ['sum_' + 'of_' + 'vars']: i + j + k
};

export const symbolVar = Symbol('mySymbol');
export const bigintVar = BigInt(100);
export const regexVar = /var[0-9]+/;
export const mapVar = new Map([['i', i], ['j', j], ['k', k]]);
export const setVar = new Set([i, j, k]);
export const promiseVar = Promise.resolve(i + j + k);
export const generatorFunc = function* () {
  yield i;
  yield j;
  yield k;
};
export const asyncFunc = async () => {
  return i + j + k;
};

export const optionalChaining = {
  nested: {
    value: i + j + k
  }
}.nested?.value;
export const nullishCoalescing = null ?? i + j + k;
export const bigIntOperation = BigInt(50) + BigInt(50);
export const dynamicImport = import('./var.js');
export const classField = class {
  field = i + j + k;
};  
export const privateField = class {
  #privateField = i + j + k
  getPrivateField() {
    return this.#privateField;
  } 
};
export const staticClassField = class {
  static staticField = i + j + k;
};
export const taggedTemplate = (strings, ...values) => {
  return strings.reduce((result, str, i) => result + str + (values[i] || ''), '');
};
export const taggedTemplateResult = taggedTemplate`Values: i=${i}, j=${j}, k=${k}`;
export const nullishCoalescingAssignment = (() => {
  let a;
  a ??= i + j + k;
  return a;
})();

export const logicalAssignment = (() => {
  let b = 0;
  b ||= i + j + k;
  return b;
}
)();;
export const numericSeparator = 1_000_000 + i + j + k;  
export const weakMapVar = new WeakMap();
export const weakSetVar = new WeakSet();
export const importMeta = typeof import.meta !== 'undefined' ? import.meta : null;
export const globalThisVar = typeof globalThis !== 'undefined' ? globalThis : null;
export const forAwaitOf = async function() {
  const asyncIterable = {
    async *[Symbol.asyncIterator]() {
      yield i;
      yield j;
      yield k;
    } 
  };
  let total = 0;  
  for await (const value of asyncIterable) {
    total += value;
  } 
  return total;
};
export const logicalNullishAssignment = (() => {
  let c = null;
  c ??= i + j + k;
  return c;
})(); 
export const privateStaticField = class {
  static #privateStaticField = i + j + k  
  static getPrivateStaticField() {
    return this.#privateStaticField;
  } 
};
export const staticBlockClass = class {
  static staticValue
;  static {
    this.staticValue = i + j + k;
  } 
};

export const topLevelAwait = await Promise.resolve(i + j + k);
export const pipelineOperator = ((value) => value +  (i + j + k))(0);
export const recordAndTuple = { i, j, k };
export const tupleVar = [i, j, k];
export const shadowedVar = (() => {
  let i = 5;
  let j = 15;
  return i + j + k;
}();
export const privateMethodClass = class {
  #privateMethod() {
    return i + j + k;
  } 
  getPrivateMethodValue() {
    return this.#privateMethod();
  } 
};