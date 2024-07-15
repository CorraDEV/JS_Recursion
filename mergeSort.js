function mergeSort(arr){
    if(arr.length === 1){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));    
    let right = mergeSort(arr.slice(mid, arr.length));    
    return merge(left, right);
}

function merge(left, right){        
    let arraySorted = [];
    while(left.length > 0 || right.length > 0){
        console.log(left[0], right[0]);
        if(right.length === 0 || left[0] <= right[0]){
            arraySorted.push(left.shift());
        }
        else if(left.length === 0 || right[0] < left[0]){
            arraySorted.push(right.shift());
        }
    }    
    return arraySorted;
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1];
const arraySorted = mergeSort(arr);
console.log(arraySorted);