console.log("ENTER THE SIZE OF SHIRT: ")
console.log("ENTER YOUR MESSAGE ON SHIRT: \n")
function T_shirt(size,message)
{
    console.log("THE SIZE OF SHIRT IS: \n"+size)
    console.log("YOUR MESSAGE ON SHIRT WILL BE: \n"+message)
}
T_shirt("small","HI")

function T_shirt(size="large")
{
    console.log("THE SIZE OF SHIRT IS: \n"+size)
    console.log("YOUR MESSAGE ON SHIRT WILL BE: \nI LOVE JAVASCRIPT")
}
T_shirt()