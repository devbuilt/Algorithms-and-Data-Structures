



/* If a smaller number is found, designate that smaller number to be the
new "minimum" and continue unil the end of the array.*/

/*If the "minimum " is no the valeu (index) you initially began with,
swap the two values*/

//Time complexity 0(N)^2
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i;/* Store the first element as the smallest value you have seen so far*/
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){/* Compare this item to the next item in the array until you find a smaller numbers*/
                lowest = j;
            }
        }
        if( i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
        
    }
    return arr;
}
console.log(selectionSort([34,22,10,19,17]))