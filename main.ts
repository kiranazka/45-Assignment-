//Creating guestlist Array
let guestlist = ["Kinza","Azka","Nida","Iqra","Afnan"];
// Making variable for those guest who cant come
let dontCome = guestlist[1];
//print  the name of guest dont come
console.log(dontCome,"Nai a Sakty hai");
 // Add or Remove from Guest List Array
guestlist.splice(1,2, "Burhan");
// print Massge  
console.log("Good News ! We have found a Bigger Table For Dinner");
// Adding the new guest at starting index Array
guestlist.unshift("Ali");
// Adding a new guest at ending index Array
guestlist.push("Zain");
// Adding one new guest at middal index of Array
let middalIndex:number =Math.floor (guestlist.length/2);
// Adding a new guest to middleindex of Array
guestlist.splice(middalIndex,0,"Osama");
console.log("update list of our Guest");
guestlist.forEach(oneguest => console.log(`Salam ${oneguest},Would you like dinner with me`));
