// Tasks
// Filter by Genre:

// Use the filter method to create a new array containing only the Sci-Fi movies.
// Hint: Use an arrow function inside the filter method to check the genre.
// Extract Titles:

// Using map and an arrow function, create a new array that contains only the titles of the movies.
// Top Rated Movies:

// Use filter to create an array of movies that have a rating of 8.8 or higher.

const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, year: 2010 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, year: 2014 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, year: 2008 },
    { title: "Forrest Gump", genre: "Drama", rating: 8.8, year: 1994 },
    { title: "Gladiator", genre: "Action", rating: 8.5, year: 2000 },
    { title: "The Matrix", genre: "Sci-Fi", rating: 8.7, year: 1999 },
    { title: "Joker", genre: "Drama", rating: 8.4, year: 2019 },
];


// Task :1  

const sciFiMovies = movies.filter((movie)=>{
    return movie.genre === 'Sci-Fi';
})
console.log(sciFiMovies);


// Task 2 :
const onlyTitle =  movies.map((movie)=>{
    return movie.title;
})
console.log(onlyTitle)