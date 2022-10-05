// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
//
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

var favorite_Fruit=["Strawberry","Apple","Banana","Mango","Orange"]
console.log(favorite_Fruit)

for(var i=0;i<favorite_Fruit.length;i++)
{
    if(favorite_Fruit[i].toLowerCase()=='Strawberrry')
    {
        console.log(`Favourite Food: ${favorite_Fruit[i]}`)
    }
    else if(favorite_Fruit[i].toLowerCase()=='mango')
    {
        console.log(`Favourite Food: ${favorite_Fruit[i]}`)
    }
    else if(favorite_Fruit[i].toUpperCase()=='BANANA')
    {
        console.log(`Favourite Food: ${favorite_Fruit[i]}`)
    }
    else
    {
        console.log(`Favourite Food: ${favorite_Fruit[i]}`)
    }
}