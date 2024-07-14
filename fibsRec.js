function fibsRec(num){
  if(num < 0){
    return [];
  }
  else if(num === 0){
    return [0];
  }
  else if(num === 1){
    return [0, 1];
  }
  
  let arr = fibsRec(num - 1);
  let succ = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(succ);
  return arr;
}
console.log(fibsRec(5))