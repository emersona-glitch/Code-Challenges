// A 1-interesting polygon is just a square with a side of length 1. An 
// n-interesting polygon is obtained by taking the n - 1-interesting polygon and 
// appending 1-interesting polygons to its rim, side by side. You can see the 
// 1-, 2-, 3- and 4-interesting polygons in the picture below.

// figure out the area of an n-interesting polygon

function shapeArea(n) {
    
  let m = 1;
  let i = 0;
  
  while (i<n) {
      m+=i*4;
      i++;
  }
  
  return m;
      
}

// optimized:
  // return n*n + (n-1)*(n-1);
