setTimeout(() => console.log("setTimeout 1"));
setImmediate(() => console.log("setImmediate 1"));
queueMicrotask(() => console.log("queueMicrotask 1"));
Promise.resolve().then(() => console.log("Promise 1"));
process.nextTick(() => console.log("process.nextTick 1"));

setTimeout(() => console.log("setTimeout 2"));
setImmediate(() => console.log("setImmediate 2"));
queueMicrotask(() => console.log("queueMicrotask 2"));
Promise.resolve().then(() => console.log("Promise 2"));
process.nextTick(() => console.log("process.nextTick 2"));

// =>
// process.nextTick 1
// process.nextTick 2
// queueMicrotask 1
// Promise 1
// queueMicrotask 2
// Promise 2
// setTimeout 1
// setTimeout 2
// setImmediate 1
// setImmediate 2
