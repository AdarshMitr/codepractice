// Fitering Objects in Javascript

// Sample Input: {a:5,b:10,c:15};
// Condition: value >7;
// Expected Output: {b:10,c:15};

const list = { a: 5, b: 10, c: 15 };
const listArr=Object.entries(list);

//----------using filter method----------

const filterList=listArr.filter(([key,value])=>value>7);
let output=Object.fromEntries(filterList)
const outputStr=JSON.stringify(output);

console.log(output)

document.getElementById('box').innerHTML=outputStr;
