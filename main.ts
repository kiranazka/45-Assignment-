let guestlist = ["Ayesha","Zarwa","Zumra","Hafsa","Azka"];
let dontCome = guestlist[0];
console.log(dontCome,"I cannot come to the Invitation");
guestlist.splice(0,0,"Ahmad");
guestlist.forEach(guest => console.log(`salam ${guest},would You Like to Dinner with me`));