

// Question 1
// Show Rating 

// function showRating(rating){
//     // Initialize a ratings variable 
//     let ratings = "";
//     // Loop through the iteration and return a star for each iteration 
//     // Use Math.floor to round off the number 
//     for (let i = 0 ; i < Math.floor(rating); ++i){
//         ratings = ratings + "*"
//         // Remove space from the last iteration 
//         if (i !== Math.floor(rating)){
//             ratings = ratings + " "
//         }
//     }
//     // check if there are decimals in the value.
//     // If the number is not an integar add a "."
//     if (!Number.isInteger(rating)){
//         ratings = ratings + ".";
//     }

//     return ratings
// }

// console.log(showRating(4.5))
// console.log(showRating(3))

// Question 2
// Low to High

// function sortLowToHigh(numbers){
//     // Sorts the array from high low to high.
//     // Opposite will do high to low 
//     return numbers.sort((a, b) => a - b);
// }

// console.log(sortLowToHigh([20,100,50,70]))

// Question 3
// High to Low 

// function sortHightoLow(number){
//     // Sort by High to Low
//     // Need to specify the price variable which will be 
//     // used to put the numbers in order
//     return number.sort((a,b) => b.price - a.price)
// }

// console.log(sortHightoLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 30 },
//     { id: 3, price: 80 }

// ]));

// Question 5
// API Question 

// Create an async function 
// async function postByUser(userId){
//     // Create a variable promise which collects the data from the API
//   const promise = await fetch ("https://jsonplaceholder.typicode.com/posts")
//     //   Create a variable which was named for fetching the data to return in English/Correct format 
//   const result = await promise.json()
//     // Create a variable which filters out the result to the input given from the userId 
//   const posts = result.filter(element => element.userId === userId)
//     // Return the filtered posts 
//   console.log(posts)
// }

// postByUser(4)
// postByUser(5)

// Question 6
// API Question 

async function firstSixInComplete(userId){

    // Collecting data from the Api 
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    // Convert the information from the backend to the front-end
    const result = await promise.json()
    // Filter out the incomplete task 
    // Return the task which equal to false using ! 
    // Using Slice to return the first 6 false tasks in the API 
    const incompleteTask = result.filter(elem => !elem.completed).slice(0,6)

    // Return the incomplete Task
    console.log(incompleteTask)
}

firstSixInComplete(6)