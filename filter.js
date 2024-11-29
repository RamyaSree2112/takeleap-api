function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  // Example usage
  const evenNumbers = myFilter(numbers, num => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]
  