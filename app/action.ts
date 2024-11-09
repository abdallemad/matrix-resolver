"use server";

export async function solveMatrix(data: [number[], number[], number[]]) {
  /**
   * Solves a system of linear equations using the Gauss-Jordan elimination algorithm.
   * The input matrix should have the coefficients of the variables in the first n-1 columns
   * and the constants in the last column.
   * @param {number[][]} mat - The input matrix
   * @returns {number[]} - The solutions to the system of linear equations
   */
  const gaussJordan = (mat: number[][]) => {
    const rowCount = mat.length;
    const colCount = mat[0].length;

    const steps: number[][][] = [mat.map((row) => [...row])]; // Initial deep copy of mat

    // Perform Gauss-Jordan elimination
    for (let i = 0; i < rowCount; i++) {
      // Make the diagonal element 1
      const divisor = mat[i][i];
      if (divisor === 0) continue; // Skip if the element is zero (no solution)

      for (let j = 0; j < colCount; j++) {
        mat[i][j] /= divisor;
      }
      steps.push(mat.map((row) => [...row])); // Add deep copy to steps

      // Make other elements in the column 0
      for (let k = 0; k < rowCount; k++) {
        if (k !== i) {
          const factor = mat[k][i];
          for (let j = 0; j < colCount; j++) {
            mat[k][j] -= factor * mat[i][j];
          }
          steps.push(mat.map((row) => [...row])); // Add deep copy to steps
        }
      }
    }
    console.log(steps)
    // Extract solutions
    const solutions = mat.map((row) => row[colCount - 1]);
    const result = {
      solution: solutions,
      steps,
    };

    return result;
  };

  const solution = gaussJordan(data);
  return solution;
}
