/*
Create an empty array, take look at the smallest values
in each input array. 
While there still vaules we haveng looked at..

    * if the value in the first array is smaller than the value in the second
    array, push the value in the first array into our results and move on the 
    next value in the first array.
    * if the value in the first array is larger than the value in the second array
    push the value in the second array into our results and move on to the 
    next value in the second array.
    * Once we exhuast one array, push in all remaining values from the other array

*/

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++
        }else{
            results.push(arr2[j]);
            j++
        }
    }
    while(i < arr1.length){
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j])
        j++;
    }
    return results;
}
// console.log(merge([1,10,50], [2,14,99,100]))


function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2); console.log(mid)
    let left = mergeSort(arr.slice(0, mid)); console.log(left);
    let right = mergeSort(arr.slice(mid)); console.log(right);
    return merge(left, right)
}
console.log(mergeSort([10,24,76,73,72,1,9]))