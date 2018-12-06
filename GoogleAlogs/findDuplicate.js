/**
This one 's a classic! We just do one walk through the array, 
using a set to keep track of which items we'
ve seen!

 */
 //O(n) time and O(n) Space
 function findRepeat(numbers){
     const numbersSeen = new Set();
     for(let i = 0; i < numbers.length; i++){
         const number = numbers[i];
         if(numbersSeen.has(number)){
             return number
         }
         numbersSeen.add(number)
     }
     //whoops --no douplicate
     throw new Error("no duplicate")
 }



 //Find repeat

 function findRepeatBrute(numbers){
     for(let needdle = 1; needdle < numbers.length; needle++){
         let hasBeenSee = false;
         for(let i = 0; i < numbers.length; i ++){
             const number = numbers[i];
             if(number === needle){
                 if(hasBeenSee){
                     return number;
                 }else{
                     hasBeenSee = true;
                 }
             }
         }
     }
     //Whoops no duplicates
     throw new Error("no duplicate!")
 }

 //O(1) Space and O(n^2)


 function findRepeat(theArray) {

     let floor = 1;
     let ceiling = theArray.length - 1;

     while (floor < ceiling) {

         // Divide our range 1..n into an upper range and lower range
         // (such that they don't overlap)
         // lower range is floor..midpoint
         // upper range is midpoint+1..ceiling
         const midpoint = Math.floor(floor + ((ceiling - floor) / 2));
         const lowerRangeFloor = floor;
         const lowerRangeCeiling = midpoint;
         const upperRangeFloor = midpoint + 1;
         const upperRangeCeiling = ceiling;

         const distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

         // Count number of items in lower range
         let itemsInLowerRange = 0;
         theArray.forEach(item => {

             // Is it in the lower range?
             if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
                 itemsInLowerRange += 1;
             }
         });

         if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {

             // There must be a duplicate in the lower range
             // so use the same approach iteratively on that range
             floor = lowerRangeFloor;
             ceiling = lowerRangeCeiling;
         } else {

             // There must be a duplicate in the upper range
             // so use the same approach iteratively on that range
             floor = upperRangeFloor;
             ceiling = upperRangeCeiling;
         }
     }

     // Floor and ceiling have converged
     // We found a number that repeats!
     return floor;
 }

 // Tests

 let desc = 'just the repeated number';
 let actual = findRepeat([1, 1]);
 let expected = 1;
 assertEqual(actual, expected, desc);

 desc = 'short array';
 actual = findRepeat([1, 2, 3, 2]);
 expected = 2;
 assertEqual(actual, expected, desc);

 desc = 'medium array';
 actual = findRepeat([1, 2, 5, 5, 5, 5]);
 expected = 5;
 assertEqual(actual, expected, desc);

 desc = 'long array';
 actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]);
 expected = 4;
 assertEqual(actual, expected, desc);

 function assertEqual(a, b, desc) {
     if (a === b) {
         console.log(`${desc} ... PASS`);
     } else {
         console.log(`${desc} ... FAIL: ${a} != ${b}`);
     }
 }

 var rooms = {

     Rooms: {
         description: "Master BedRoom",
         style: "Spanish",
         completed: true,
     },

     Rooms: {
         description: "First BedRoom",
         style: "Spanish",
         completed: false,
     },

     Rooms: {
         description: "Second BedRoom",
         style: "Spanish",
         completed: true,
     }

 }
