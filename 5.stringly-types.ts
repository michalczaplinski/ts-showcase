// 5. Typing weird JS APIs

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj = { text: "hello", count: 42 };

let text = getProperty(obj, "text");
let count = getProperty(obj, "count");
let foo = getProperty(obj, "foo");
