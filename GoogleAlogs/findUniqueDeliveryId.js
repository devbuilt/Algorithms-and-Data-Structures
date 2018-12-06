/*
A brute force approach would use two nested loops to go through every ID and check every other ID to see
if there 's a duplicate.

This would take O(n ^ 2) O(n​ 2​​) time and O(1) O(1) space.Can we bring that runtime down ?

    Well, we know every integer appears twice, except
for one integer, which appears once.Can we just track how many times each integer appears ?

    We could iterate through the array and store each integer in an object, where the keys are the integers and the values are the number of times we’ ve seen that integer so far.At the end, we’ d just need to
return the integer we saw one time.


/*
This would take O(n ^ 2) O(n​ 2​​) time and O(1) O(1) space.Can we bring that
 runtime down ?
*/
function findUniqueDeliveryId(deliveryIds) {

    var idsToOccurrences = new Map();

    deliveryIds.forEach(function (deliveryId) {
        if (idsToOccurrences.has(deliveryId)) {
            var newCount = idsToOccurrences.get(deliveryId) + 1;
            idsToOccurrences.set(deliveryId, newCount);
        } else {
            idsToOccurrences.set(deliveryId, 1);
        }
    });

// Map
for (var [id, count] of idsToOccurrences) {
    if (count === 1) {
        return id;
    }
}
}



//XOR SOLUTION
/**
 * 
 * We XOR↴ all the integers in the array.We start with a variable uniqueDeliveryId set to 00. Every time we XOR with a new ID, it will change the bits.When we XOR with the same ID again, it will cancel out the earlier change.

 In the end, we 'll be left with the ID that appeared once!
 */
function findUniqueDeliveryId(deliveryIds) {

var uniqueDeliveryId = 0;

deliveryIds.forEach(function (deliveryId) {
    uniqueDeliveryId ^= deliveryId;
});

return uniqueDeliveryId;
}

//0(n) time, and 0(1) Space