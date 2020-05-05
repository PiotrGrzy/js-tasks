// Programowanie asynchroniczne oraz promisy

// w Javascript Promise posiadają swoje metody
// Promise.all(arrayOfPromises)
// Promise.race(arrayOfPromises)

// Wg mnie powinny jeszcze posiadać metodę:
// Promise.last(arrayOfPromise) - zwraca do then tylko ostatnią promisę, która się wykonała asynchronicznie,
// a jeśli wystąpił błąd w co najmniej jednej promisę, zwraca do catch ten błąd po ukończeniu ostatniej promisy

// Promise.ignoreErrors(arrayOfPromise) - nie ważne co się stanie,
// zwracane są tylko te wyniki promise, które zakończyły się sukcesem, błędy są ignorowane

// skopiuj identyczne działanie tych metod w funkcjach

const p1 = Promise.resolve(3);
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo3');
  }, 1300);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo4');
  }, 500);
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo5');
  }, 1000);
});

// zakładamy że arrayOfPromise faktycznie składa się z promisów

const promiseAll = (arrayOfPromise) => {
  return new Promise((resolve, reject) => {
    const values = [];
    const loop = async () => {
      for (const promise of arrayOfPromise) {
        await promise
          .then((value) => {
            values.push(value);
          })
          .catch((err) => reject(err));
      }
      resolve(values);
    };
    loop();
  });
};

promiseAll([p3, p4, p5])
  .then((values) => console.log('Promise All:', values))
  .catch((err) => console.log(err));

const promiseRace = (arrayOfPromise) => {
  return new Promise((resolve, reject) => {
    arrayOfPromise.map((promise) =>
      promise.then((value) => resolve(value)).catch((err) => reject(err))
    );
  });
};

promiseRace([p3, p4, p5])
  .then((values) => console.log('Promise Race:', values))
  .catch((err) => console.log(err));

const promiseLast = (arrayOfPromise) => {
  // tego nie ogarnąłem, poddaje się
  return new Promise((resolve, reject) => {
    const values = [];
    arrayOfPromise.map((promise) =>
      promise.then((v) => {
        console.log('promise last', v), values.push(v);
      })
    );
  });
};

//promiseLast([p3, p4, p5]).then((values) => console.log('Promise Last', values));

const promiseIgnoreErrors = (arrayOfPromise) => {
  return new Promise((resolve, reject) => {
    const values = [];
    const loop = async () => {
      for (let i = 0; i < arrayOfPromise.length; i++) {
        await arrayOfPromise[i]
          .then((value) => {
            values.push(value);
          })
          .catch((err) => {
            return null;
          });
      }
      resolve(values);
    };
    loop();
  });
};

promiseIgnoreErrors([p1, p3, p4, p5]).then((values) =>
  console.log('Promise Ignore Errors:', values)
);
