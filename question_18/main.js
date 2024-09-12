var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and print is original order
var countriesToVist = ["china", "danmark", "brazil", "america"];
console.log("Original Order: ", countriesToVist);
//print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Ordr:", __spreadArray([], countriesToVist, true).sort());
//show that the array is still in its original order
console.log("Still in Original Order:", countriesToVist);
//print the array in reversed order without modifying the actual array list (copy)
console.log("Reverse Order:", __spreadArray([], countriesToVist, true).reverse());
//show that the array is still in its original order
console.log("Still in Original Order:", countriesToVist);
//we have changed the original array order now
console.log("Original Array Reversed:", countriesToVist.reverse());
//print the array to show that its back to its original order
console.log("Back to original Order:", countriesToVist.reverse());
//print the array to show that its has been changed in alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVist.sort());
//we have changed in again the original array order now in reverse order again
console.log("Original Array Reversed:", countriesToVist.reverse());
