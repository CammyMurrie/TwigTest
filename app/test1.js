export function splitArray(length, value) {
  let array = [];
  let newArray = [];

  //initialise the original array
  for (let i = 0; i < length; i++) {
    array.push(i);
  }
  //return original array if value = 0
  if (value <= 0) {
    return array;
  }

  //iterate up to i < array.length and increment i by the value of value each time
  //this allows you to avoid duplicate numbers while slicing the array
  //i.e. not ending up with [[0, 1], [1, 2], [2, 3]] etc etc
  for (let i = 0; i < array.length; i+=value) {
    let sliced = array.slice(i, i+value);
    newArray.push(sliced);
  }

  return newArray;
}
