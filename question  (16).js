// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

console.log("\n ONLY 2 PEOPLE ALLOWED!")


for(var i=0;i<guest.length;i++){
    guest.splice(2,3)
    console.log("YOU ARE STILL INVITED: "+guest[i])
}

delete guest[0];
delete guest[1];

console.log(guest)
