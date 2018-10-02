function mergeSort(array){
    let mid = (array.length)/2;
    if(mid < 1){
        return array;
    }
    let sub1 = mergeSort(array.slice(0,mid));
    let sub2 = mergeSort(array.slice(mid, array.length));
    return mergeHalves(sub1, sub2);
}

function mergeHalves(leftSubArray, rightSubArray){
    let left = 0;
    let right = 0;
    let index = 0;
    let temp = [];
    while(left < leftSubArray.length && right < rightSubArray.length){
        if(leftSubArray[left] < rightSubArray[right]){
            temp[index] = leftSubArray[left];
            ++left;
        }else{
            temp[index] = rightSubArray[right];
            ++right;
        }
        ++index;
    }
    while(left < leftSubArray.length){
        temp[index] = leftSubArray[left];
        ++left;
        ++index;
    }
    while(right < rightSubArray.length){
        temp[index] = rightSubArray[right];
        ++right;
        ++index;
    }
    return temp;
}

console.log(mergeSort([3,1,2,4,5,6,10,8,9,7]));