//  function memoizeTransform() {
//     let lastX = undefined;
//     let lastY = undefined;
//     let lastResult = undefined;
// //     return function(x, y){
// //       console.log(lastResult);
// //       if(lastX === x && lastY === y) return lastResult;
// //       lastX = x;
// //       lastY = y;
// //       lastResult = f(x, y);
// //       return lastResult;
  
// // }

// function innerFub(x, y){
//   console.log(x,y);
//     console.log(lastResult);
//     if(lastX === x && lastY === y) return lastResult;
//     lastX = x;
//     lastY = y;
//     // lastResult = f(x, y);
//     return console.log(lastX, lastY);
    
//   }

// return innerFub(1,2);

// }
// // function add(x,y){
// //     return x+y;
// //     }
// //   var xyz=memoizeTransform(add);
// //   console.log(xyz(2,3));
// var xyz=memoizeTransform();
// // console.log(xyz(2,3));


// //===================================================================
// const obj = {
//   name: "Object",
//   printName: () => {
//       console.log(this.name);
//   }
// };

// obj.printName(); // This will log undefined since arrow functions don't bind `this` to obj

// //=====================================================================================
// const obj1 = {
//   name: "Object",
//   regularFunction: function() {
//       console.log(this.name); // 'this' refers to 'obj'
//   },
//   arrowFunction: () => {
//       console.log(this.name); // 'this' refers to the enclosing context, which may be the global object
//   }
// };

// obj1.regularFunction(); // Outputs: Object
// obj1.arrowFunction(); // Outputs: undefined (or whatever is in the global context)
//===========================================================================================================
function generatePascalsTriangle(numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
      triangle[i] = [];
      triangle[i][0] = 1; // First element of each row is always 1

      for (let j = 1; j < i; j++) {
          // Each element (excluding the first and last) is the sum of the elements directly above it
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }

      if (i > 0) {
          triangle[i][i] = 1; // Last element of each row is always 1
      }
  }

  return triangle;
}
console.log(generatePascalsTriangle(5));
// Function to print Pascal's Triangle
function printPascalsTriangle(triangle) {
  for (let i = 0; i < triangle.length; i++) {
      console.log(triangle[i].join(' '));
  }
}

// Generate Pascal's Triangle with 5 rows
const numRows = 5;
const pascalsTriangle = generatePascalsTriangle(numRows);

// Print Pascal's Triangle
printPascalsTriangle(pascalsTriangle);
