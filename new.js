/******************************************************************************
6.

Complete the function below:

The function should take in an array as a parameter.

The automatic testing will test your function with the following array:
["Spider-Man", "Thor", "Hulk", "Doctor Strange", "Iron Man", "Black Widow"]

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

 Return the resulting array.
******************************************************************************/

function marvelEditor(array) {
    let newArray = array.slice(1);
    let newNewArray = newArray.replace("Doctor Strange","Skrull");
    let splicedArray = newNewArray.splice(0, 2, "Captain America");
    console.log(newArray)
    return splicedArray.join('💪');

  }