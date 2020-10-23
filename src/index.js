module.exports = function check(str, bracketsConfig) {
  if (str.length < 2) return false;
  let numBrackets = -1;
  let arrStr = str.split('');


  for (let y = 0; y < str.length - 1; y++) { 
    numBrackets = -1;

    for (let i = 0; i < arrStr.length - 1; i++) { 
      bracketsConfig.forEach(arr => {
        if ((arrStr[i] === arr[0]) && (arrStr[i+1] === arr[1])) numBrackets = i;
      });
    }

    if (numBrackets !== -1) arrStr.splice(numBrackets, 2);
  }
  
  return (arrStr.length === 0) ? true : false;
}

