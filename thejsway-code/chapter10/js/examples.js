const movieList = [
    {
        title: "Batman",
        year: 1989,
        director: "Tim Burton",
        imdbRating: 7.6
    },
    {
        title: "Batman Returns",
        year: 1992,
        director: "Tim Burton",
        imdbRating: 7.0
    },
    {
        title: "Batman Forever",
        year: 1995,
        director: "Joel Schumacher",
        imdbRating: 5.4
    },
    {
        title: "Batman & Robin",
        year: 1997,
        director: "Joel Schumacher",
        imdbRating: 3.7
    },
    {
        title: "Batman Begins",
        year: 2005,
        director: "Christopher Nolan",
        imdbRating: 8.3
    },
    {
        title: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        imdbRating: 9.0
    },
    {
        title: "The Dark Knight Rises",
        year: 2012,
        director: "Christopher Nolan",
        imdbRating: 8.5
    }
];

// Get movie titles
const titles = [];
for (const movie of movieList) {
    titles.push(movie.title);
}
console.log(titles);

// Count movies by Christopher Nolan
let ratingSum = 0;
const nolanMovieList = [];
for (const movie of movieList) {
    if (movie.director === "Christopher Nolan") {
        nolanMovieList.push(movie);
        ratingSum += movie.imdbRating;
    }
}
let avgRating = ratingSum / nolanMovieList.length;
console.log(avgRating);

// Get titles of movies with an IMDB rating greater or equal to 7.5
const bestTitles = [];
for (const movie of movieList) {
    if (movie.imdbRating >= 7.5)
        bestTitles.push(movie.title);
}
console.log(bestTitles);

const n = 10;
const fruit = "Banana";
const obj = {
    myProp: 2
};
const animals = ["Elephant", "Turtle"];
obj.myProp = 3; // Mutating a property is OK even for a const object
obj.myOtherProp = "abc"; // Adding a new property is OK even for a const object
animals.push("Gorilla"); // Updating content is OK even for a const array

// Get movie titles
const _titles = () => {
    const titles = [];
    for (const movie of movieList) {
        titles.push(movie.title);
    }
    return titles;
};

console.log(_titles());

// Compute average rating of Christopher Nolan's movies
const averageNolanRating = () => {
    let ratingSum = 0;
    for (const movie of nolanMovieList) {
        ratingSum += movie.imdbRating;
    }
    return ratingSum / nolanMovieList.length;
};
console.log(averageNolanRating());

// Pure functions
const avgFilmRating = movies => {
    let ratingSum = 0; 
    for (const m of movies) {
        ratingSum += m.imdbRating;
    }
    return ratingSum / movies.length;
}
console.log(avgFilmRating(nolanMovieList));

// The map() method
const numbers = [1, 5, 10, 15];
// The associated function multiply each array number by 2
const doubles = numbers.map(x => x * 2);
console.log(numbers); // [1, 5, 10, 15] (no change)
console.log(doubles); // [2, 10, 20, 30]

const mapTitles = movies => {
    return movies.map(m => m.title);
}

console.log(mapTitles(nolanMovieList))
console.log(nolanMovieList)

// the filter() method
const filterIMDBRatingList = (movies, rate) => {
    return movies.filter(m => m.imdbRating >= rate);
}
console.log(mapTitles(filterIMDBRatingList(nolanMovieList, 9.0)));

// Get titles of movies with an IMDB rating greater or equal to 7.5
const _bestTitles = movies => {
    // Filter movies by IMDB rating, then creates a movie titles array
    return movies.filter(movie => movie.imdbRating >= 7.5).map(movie => movie.title);
};
console.log(_bestTitles(movieList));

// The reduce() method
const _numbers = [1, 5, 10, 15];
// Compute the sum of array elements
const sum = numbers.reduce((acc, value) => acc + value, 0);
console.log(numbers); // [1, 5, 10, 15] (no change)
console.log(sum); // 31

// ******** FINAL VERSION ********
const titles1 = movies => movies.map(movie => movie.title);
const byNolan = movie => movie.director === "Christopher Nolan";
const filter = (movies, func) => movies.filter(func);
const goodRating = movie => movie.imdbRating >= 7.5;
const ratings = movies => movies.map(movie => movie.imdbRating);
const average = array => array.reduce((sum, value) => sum + value, 0) / array.length;
console.log(titles1(movieList));