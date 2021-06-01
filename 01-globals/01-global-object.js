console.log("可枚举属性：", Object.keys(global));
console.log();
// =>
// 可枚举属性： [
//   'global',
//   'clearInterval',
//   'clearTimeout',
//   'setInterval',
//   'setTimeout',
//   'queueMicrotask',
//   'clearImmediate',
//   'setImmediate'
// ]

console.log("所有属性：", Object.getOwnPropertyNames(global).sort());
console.log();
// =>
// 所有属性： [
//   'Array',                'ArrayBuffer',       'Atomics',
//   'BigInt',               'BigInt64Array',     'BigUint64Array',
//   'Boolean',              'Buffer',            'DataView',
//   'Date',                 'Error',             'EvalError',
//   'FinalizationRegistry', 'Float32Array',      'Float64Array',
//   'Function',             'Infinity',          'Int16Array',
//   'Int32Array',           'Int8Array',         'Intl',
//   'JSON',                 'Map',               'Math',
//   'NaN',                  'Number',            'Object',
//   'Promise',              'Proxy',             'RangeError',
//   'ReferenceError',       'Reflect',           'RegExp',
//   'Set',                  'SharedArrayBuffer', 'String',
//   'Symbol',               'SyntaxError',       'TextDecoder',
//   'TextEncoder',          'TypeError',         'URIError',
//   'URL',                  'URLSearchParams',   'Uint16Array',
//   'Uint32Array',          'Uint8Array',        'Uint8ClampedArray',
//   'WeakMap',              'WeakRef',           'WeakSet',
//   'WebAssembly',          'clearImmediate',    'clearInterval',
//   'clearTimeout',         'console',           'decodeURI',
//   'decodeURIComponent',   'encodeURI',         'encodeURIComponent',
//   'escape',               'eval',              'global',
//   'globalThis',           'isFinite',          'isNaN',
//   'parseFloat',           'parseInt',          'process',
//   'queueMicrotask',       'setImmediate',      'setInterval',
//   'setTimeout',           'undefined',         'unescape'
// ]

global.customVar = "custom var";
console.log("使用自定义全局属性属性 `global.customVar`：", global.customVar);
console.log();
// =>
// 使用自定义全局属性属性 `global.customVar`： custom var

console.log("`globalThis` === `global`：", globalThis === global);
// =>
// `globalThis` === `global`： true
