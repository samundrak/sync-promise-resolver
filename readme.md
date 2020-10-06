# Synchronous Promise Resolver

A simple module which takes an argument as an array of function which returns a promise to be resolved one by one. It executes a given promise sequentially and returns a promise which can be consumed later to do the task when all promises are fulfilled or rejected.

# Install

- `npm install sync-promise-resolver`

# Usage

import default exported library from `sync-promise-resover`

```
import SYP from 'sync-promise-resolver;
```

create an array of function which returns actual promise to be resolved

```
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
```

Now call it

```
syp(promiseArray)
  .then(() => {
    console.log("All promise resolved");
  })
  .catch((err) => {
    console.log("nothing done");
  });
```

# Full Code

```
import syp from '../dist/sync-promise.resolver';

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

```
