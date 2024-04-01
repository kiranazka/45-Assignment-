var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countiesToVist = ["China", "Pakistan", "America", "Bahrain", "Sweden"];
console.log("Orginal order:", countiesToVist);
// print the array in Alphabetical order without modifying the Actual Array list
console.log("Alphabetical order :", __spreadArray([], countiesToVist, true).sort());
// print the array  still in Orginal order   modifying the Actual Array list
console.log("still in Orginal order:", countiesToVist);
// print the array Reverse order   modifying the Actual Array  reverse list
console.log("Reverse order:", __spreadArray([], countiesToVist, true).reverse());
// print the array  still in Orginal order   modifying the Actual Array list
console.log("still in Orginal order:", countiesToVist);
// print the array   Orginal Array reversed order   modifying the Actual  reverse Array list
console.log("orginal Array reversed:", countiesToVist.reverse());
// print the array  back to Orginal order   modifying the Actual Array reverse list
console.log("back to Orginal order:", countiesToVist.reverse());
// print the sorted in Alphabetical order   modifying the Actual sort 
console.log("sorted in Alphabetical order:", countiesToVist.sort());
// print the array  Orginal  reversed again  modifying the Actual Array  revrse list
console.log("orginal Array reversed again:", countiesToVist.reverse());
