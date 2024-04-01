let countiesToVist: string[] = ["China","Pakistan","America","Bahrain","Sweden"];
console.log("Orginal order:",countiesToVist);
// print the array in Alphabetical order without modifying the Actual Array list
console.log("Alphabetical order :",[...countiesToVist].sort());
// print the array  still in Orginal order   modifying the Actual Array list
console.log("still in Orginal order:",countiesToVist);
// print the array Reverse order   modifying the Actual Array  reverse list
console.log("Reverse order:",[...countiesToVist].reverse());
// print the array  still in Orginal order   modifying the Actual Array list
console.log("still in Orginal order:",countiesToVist);
// print the array   Orginal Array reversed order   modifying the Actual  reverse Array list
console.log ("orginal Array reversed:",countiesToVist.reverse());
// print the array  back to Orginal order   modifying the Actual Array reverse list
console.log("back to Orginal order:",countiesToVist.reverse());
// print the sorted in Alphabetical order   modifying the Actual sort 
console.log("sorted in Alphabetical order:",countiesToVist.sort());
// print the array  Orginal  reversed again  modifying the Actual Array  revrse list
console.log ("orginal Array reversed again:",countiesToVist.reverse());