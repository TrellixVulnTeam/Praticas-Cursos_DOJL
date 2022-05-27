let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C';  // A

let varAuxA;

varAuxA = varA;
varAuxB = varB;
varAuxC = varC;

varA = varAuxB;
varB = varAuxC;
varC = varAuxA;

console.log(`varA: ${varA}\nvarB: ${varB}\nvarC: ${varC}`);

////////////////////////////
varA = 'A'; // B
varB = 'B'; // C
varC = 'C';  // A

let varTemp;

varTemp = varA;
varA = varB;
varB = varC;
varC = varTemp;

console.log(`varA: ${varA}\nvarB: ${varB}\nvarC: ${varC}`);

/////////////////////////////

[varA, varB, varC] = [varB, varC, varA];

console.log(`varA: ${varA}\nvarB: ${varB}\nvarC: ${varC}`);




