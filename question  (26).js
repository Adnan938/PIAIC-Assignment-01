// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//     • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

var currentUser=["ADMIN","Fahad","Hasnain","Faiq"]

for(var i=0;i<currentUser.length;i++)
 {
     if(currentUser[i].toLowerCase()=='admin')
    {
        console.log(`Hello ${currentUser[i]}`)
     }
     else if(currentUser[i].toLowerCase()=='mushi')
     {
         console.log(`HI ${currentUser[i]}, thank you for logging in again`)
     }
     else if(currentUser[i].toUpperCase()=='kami')
    {
         console.log(`HI ${currentUser[i]}, thank you for logging in again`)
    }
     else
     {
        console.log(`HI ${currentUser[i]}, thank you for logging in again`)
     }
}