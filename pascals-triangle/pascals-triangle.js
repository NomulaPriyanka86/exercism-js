//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numRows) => {
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
};
