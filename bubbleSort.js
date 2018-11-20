function swap1(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
 }

 console.log(swap1(5,4,2,9))


 const swap = (arr, index1, index2) => {
     [arr[index1],arr[index2]] = [arr[index2],arr[index1]];
 }

 console.log(swap(1,2,4,3,8))

 /* Start looping from with a variable called i the end of
 the array towards the beginning 
 */
/* Start an inner loop with a variable called j from the beginning until i - 1
 */
/* if arr[j] is greater than arr[j+1], swap those tow values
 */
/* Return the sorted array
 */
 
 //Time complexity O(N)
 function bubelSort(arr){
     let noSwaps; // optimizing
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j + 1]){
                //swap variable
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
        console.log('ONE PASS COMPLETE')
    }
    return arr;
 }
 console.log(bubelSort([37,45,29,8,12,88,-3]))
 