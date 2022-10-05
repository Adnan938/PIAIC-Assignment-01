// Magicians: Make a array of magician’s names. Pass the array
// to a function called show_magicians(), which prints the name of each magician in the array.
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
// make_great() that modifies the array of magicians by adding the phrase the
// Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

var magicians=["David Copperfield","Lance Burton","Ricky Jay","Mark Wilson"]

function magician_show()
{
     for(var i=0;i<magicians.length;i++)
     {
      console.log(magicians[i])
     }
}
magician_show();
console.log("**ORIGINAL AND GREAT COPY SEPARATED**")
function make_great(){
    for(var i=0;i<magicians.length;i++)
    {
     console.log(`Great ${magicians[i]}`)
    }
}
make_great();