

// Question 1
// Show Rating 

function showRating(rating){
    // Initialize a ratings variable 
    let ratings = "";
    // Loop through the iteration and return a star for each iteration 
    // Use Math.floor to round off the number 
    for (let i = 0 ; i < Math.floor(rating); ++i){
        ratings = ratings + "*"
        // Remove space from the last iteration 
        if (i !== Math.floor(rating)){
            ratings = ratings + " "
        }
    }
    // check if there are decimals in the value.
    // If the number is not an integar add a "."
    if (!Number.isInteger(rating)){
        ratings = ratings + ".";
    }

    return ratings
}

console.log(showRating(4.5))
console.log(showRating(3))