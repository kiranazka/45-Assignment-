var guestlist = ["Ayesha", "Zarwa", "Zumra", "Hafsa", "Azka"];
var dontCome = guestlist[0];
console.log(dontCome, "I cannot come to the Invitation");
guestlist.splice(0, 0, "Ahmad");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ",would You Like to Dinner with me")); });
