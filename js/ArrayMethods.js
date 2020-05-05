// Programowanie funkcyjne oraz arraye

// w Javascript Arraye posiadają swoje metody
// .forEach
// .map
// .entries
// .filter
// .reduce
// .every
// .some

// skopiuj identyczne działanie tych metod za pomocą pętli for lub while
// w funkcjach

const array = [1, 2, 3, 4, 5];

const forEachFn = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

const mapFn = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
};

const entriesFn = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push({ done: false, value: [i, array[i]] });
  }
  return newArray[Symbol.iterator]();
};

const filterFn = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const everyFn = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
};

const someFn = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
};

const reduceFn = (array, callback, initial) => {
  let result = initial;
  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i]);
  }
  return result;
};
