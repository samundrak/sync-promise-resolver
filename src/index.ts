export default function synchronousPromiseResolver(promises) {
  const copyOfPromises = [...promises];
  const promisesAnswer = [];

  return new Promise((resolve, reject) => {
    const prResolver = function (promise) {
      if (!promises.length || !promise || typeof promise !== "function") {
        return resolve(promisesAnswer);
      }
      promise()
        .then((data) => {
          promisesAnswer.push(data);
          prResolver(copyOfPromises.shift());
        })
        .catch((err) => {
          reject(err);
        });
    };
    prResolver(copyOfPromises.shift());
  });
}
