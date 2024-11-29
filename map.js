function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4];
  const squared = myMap(numbers, num => num * num);
  console.log(squared); // Output: [1, 4, 9, 16]
  