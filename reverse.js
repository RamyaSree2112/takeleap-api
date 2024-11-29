function reverseString(str) {
    // Convert the string into an array using split()
    const strArray = str.split('');
    
    // Reverse the array using reverse()
    const reversedArray = strArray.reverse();
    
    // Join the reversed array back into a string using join()
    const reversedString = reversedArray.join('');
    
    return reversedString;
  }
  
  // Example usage
  const originalString = "Hello, World!";
  const reversed = reverseString(originalString);
  
  console.log("Original String:", originalString);
  console.log("Reversed String:", reversed);
  