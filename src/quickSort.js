let arr = [];
function quickSort(start, end){
    if(start >= end){
        return; 
    }
    let index = partition(start, end);
    console.log(index);
    quickSort(start, index-1);
    quickSort(index+1, end);
}

function partition(start, end){
    let pIndex = start;
    let pivot = arr[end]; 
    for(let i = 0; i < end ; i++){
        if(arr[i] <= pivot){
            let temp = arr[i];
            arr[i] = arr[pIndex];
            arr[pIndex] = temp;
            ++pIndex;  
        }
    }
    //Once the loop ends swap the pIndex and end elements;
    let temp = arr[pIndex];
    arr[pIndex] = arr[end];
    arr[end] = temp;
    console.log('Retrned p index:' + pIndex);
    return pIndex;
}
arr = [3,1,2,4,6,5,8,7,10,9];
quickSort(0,arr.length-1);
console.log(arr);