// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



let guest=["FAHAD",'LAIBA',"FAIQ"]
for(var i=0;i<guest.length;i++){
    console.log("YOU ARE INVITED: "+guest[i])
}

console.log("\n FAIQ CAN'T MAKE IT THE PARTY.")

guest[2]="HASNIAN"
// for(var i=0;i<guest.length;i++){
//     console.log("YOU ARE INVITED: "+guest[i])
// }

console.log("\n MORE TABLES ARE AVAILABLE")

guest.push("ALI")
guest.unshift("SHARI")

for(var i=0;i<guest.length;i++){
    console.log("YOU ARE INVITED: "+guest[i])
}

