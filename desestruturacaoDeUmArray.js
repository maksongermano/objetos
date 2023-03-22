const array = [1, 2, 3, 4, 5, 6]

const [a, b, ...resto] = array // o restaante sempre deve ser o ultim elemento ...
console.log(a, b, resto);