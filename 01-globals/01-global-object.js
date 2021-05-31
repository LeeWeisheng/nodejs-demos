console.log("可枚举属性：", Object.keys(global));
console.log();

console.log("所有属性：", Object.getOwnPropertyNames(global).sort());
console.log();

global.customVar = "custom var";
console.log("使用自定义全局属性属性 `global.customVar`：", global.customVar);
console.log();

console.log("`globalThis` === `global`：", globalThis === global);
