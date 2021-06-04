console.log("会被清除的消息");
console.clear();

console.log("打印：----------------------------------------------------------");
console.log("%s：%d", "日志", 10);
console.error("%s：%d", "错误", 10);
console.log();

console.log("计数：----------------------------------------------------------");
console.count("计数");
console.count("计数");
console.countReset("计数");
console.count("计数");
console.count("计数");
console.log();

console.log("计时：----------------------------------------------------------");
console.time("计时");
console.timeLog("计时", "数据");
console.timeEnd("计时");
console.log();

console.log("分组：----------------------------------------------------------");
console.group("分组");
console.log("分组内的消息");
console.group("嵌套分组");
console.log("嵌套分组内的消息");
console.groupEnd("嵌套分组");
console.log("分组内的消息");
console.groupEnd("分组");
console.log();

console.log("断言：----------------------------------------------------------");
console.assert(false, "断言消息");
console.log();

console.log("跟踪：----------------------------------------------------------");
console.trace("跟踪");
console.log();

console.log("表格：----------------------------------------------------------");
console.table([
  { a: 1, b: "Y" },
  { a: "Z", b: 2 },
]);
