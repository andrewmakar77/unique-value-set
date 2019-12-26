const unique = arr => Array.from(new Set(arr));

const numbers = [1, 1, 1, 2, 2, 3, 4];

const uniqueNumbers = unique(numbers); // [1, 2, 3, 4]

