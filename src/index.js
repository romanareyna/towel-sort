// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];

    if (matrix !== undefined && matrix[0] !== undefined) {
        result = matrix
            .map((arr, i) => {
                return i % 2 > 0 ? arr.sort((a, b) => b - a) : arr;
            })
            .flat();
    }

    return result;
};
