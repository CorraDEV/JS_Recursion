function fibs(num){    
    let arr = [];
    for(let i = 0; i < num; i++){
        if(i < 2){
            arr.push(i);
        }
        else{
            arr.push(arr[i - 2] + arr[i - 1]);
        }        
    }
    return arr;
}

const vector = fibs(4);
console.log(vector);