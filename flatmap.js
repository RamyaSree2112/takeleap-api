function myFlatMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const mappedValue = callback(array[i], i, array);
      if (Array.isArray(mappedValue)) {
        result.push(...mappedValue); // Flatten the array
      } else {
        result.push(mappedValue);
      }
    }
    return result;
  }
  
  // Example usage
  const nested = [1, 2, 3];
  const flatMapped = myFlatMap(nested, num => [num, num * 2]);
  console.log(flatMapped); // Output: [1, 2, 2, 4, 3, 6]
  