function combine(input1: any, input2: any) {
    const result = input1 + input2;
    return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);