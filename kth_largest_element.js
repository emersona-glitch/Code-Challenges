// Note: Avoid using built-in std::nth_element (or analogous built-in functions
// in languages other than C++) when solving this challenge. Implement them
// yourself, since this is what you would be asked to do during a real interview.

// Find the kth largest element in an unsorted array. This will be the kth
// largest element in sorted order, not the kth distinct element.

// Example

//     For nums = [7, 6, 5, 4, 3, 2, 1] and k = 2, the output should be
//     kthLargestElement(nums, k) = 6;
//     For nums = [99, 99] and k = 1, the output should be
//     kthLargestElement(nums, k) = 99.

// SOLUTION:
function kthLargestElement(arrayOfNumbers, k) {
  return arrayOfNumbers.sort((a, b) => a - b)[arrayOfNumbers.length - k];  
}

// obviously this is a 2 step process of sorts
// first sort the (potentially unordered) array,
// then, we want to return the kth element from the end.

// since javascript (and many languages, by some means) already has a built in
// sorting algorith array.sort(), we can use this.

// however, as it is, this array sorts strings by comparing unicode characters
// so this won't work for our array of numbers unless all the numbers are < 10
// luckily, array.sort() accepts a comparison function as an argument.

// above, we use an anonymous, one line arrow function that could be refactored
// to look like this:

function compareElements(firstElement, secondElement) {
  return (firstElement - secondElement);
}

// this works because...
// if the comparison function returns a value <= zero,
// the order of firstElement and secondElement will be unchanged.
// but
// if the function returns a value greater than zero,
// the order of these 2 elements will be reversed.