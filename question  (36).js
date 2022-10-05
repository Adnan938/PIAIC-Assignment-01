// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(){
    console.log("\nTHESE ARE ALL YOUR ITEMS ON SANDWICH: ")
    for(var i=0;i<items.length;i++){

        console.log(items[i])
    }
}
sandwich(items=["BREAD","CHEESE","KETCHUP"])
sandwich(items=["PEPPER","TOMATO","CHICKEN"])
sandwich(items=["MAYO","FAJITA","LETTUCE"])