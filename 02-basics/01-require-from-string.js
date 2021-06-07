const path = require("path");
const crypto = require("crypto");
const Module = require("module");

const cache = new Map();

function md5(content) {
  if (cache.has(content)) {
    return cache.get(content);
  } else {
    const value = crypto.createHash("md5").update(content).digest("hex");
    cache.set(content, value);
    return value;
  }
}

function requireFromString(content) {
  const id = path.resolve(__dirname, md5(content) + ".js");

  if (require.cache[id]) {
    console.log("使用缓存");
    return require.cache[id].exports;
  }

  console.log("未使用缓存");
  const child = new Module(id, module);
  child.filename = id;
  child.paths = module.paths;
  child._compile(content, id);
  require.cache[id] = child;
  return child.exports;
}

console.log(requireFromString(`module.exports = 'exmaple'`));
console.log(requireFromString(`module.exports = 'exmaple'`));
