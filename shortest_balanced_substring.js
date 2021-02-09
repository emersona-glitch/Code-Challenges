// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// find the shortest substring of string S where each unique letter
// is represented as both a capital and a lowercase (e.g. 'AabbaB', 'XssSsxSS', 'Nn')
// return the length of the substring or return -1 if no substring is found

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  // let windowSize = 2;
  let windowLimit = S.length



  for (let windowSize=2; windowSize<windowLimit; windowSize++) {
      for (let scanPos=0; scanPos<(windowLimit-1)-windowSize; scanPos++) {
          console.log('scanPos')
          for (let i=scanPos; i<scanPos+windowSize; i++) {
              
              // here's the rub
              


              // running array of letters
              // is this current letter contained in our array?
                  // yes:
                      // 
                  // no:
                      // push it to the array



          }
      }
  }
  // console.log(windowSize, windowLimit)
  return 0;
}
