const syp = require("../dist/sync-promise.resolver").default;
console.log(syp);

const fakePromise = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time || 100);
  });

const promiseArray = Array(20)
  .fill(true)
  .map((_, index) => () =>
    fakePromise(index * 200).then(() =>
      console.log(`Resolved Promise #${index} after ${index * 200}ms`)
    )
  );

syp(promiseArray)
  .then(() => {
    console.log("All promise resolved");
  })
  .catch((err) => {
    console.log("nothing done");
  });
