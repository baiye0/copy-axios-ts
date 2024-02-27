const toString = Object.prototype.toString;

export function isDate(val: any): val is Date {
  return toString.call(val) === "[object Date]";
}

export function isObject(val: any): val is Object {
  return toString.call(val) === "[object Object]";
}

//遍历原型上的方法
export function extend<T, U>(to: T, from: U): T & U {
  const prototypeMethods = Object.getOwnPropertyNames(
    Object.getPrototypeOf(from)
  ).filter((prop) => typeof from[prop] === "function");
  prototypeMethods.forEach((method) => {
    (to as any)[method] = from[method].bind(from);
  });

  return to as T & U;
}
