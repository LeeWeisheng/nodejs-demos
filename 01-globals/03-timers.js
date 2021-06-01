const timer = setTimeout(() => {
  console.log("long timeout");
}, 2000);

timer.unref();

setTimeout(() => {
  console.log("sort timeout");
}, 1000);

// =>
// sort timeout
