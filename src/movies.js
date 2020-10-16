// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const arr = movies.map((movies) => movies.director);
    return arr;
  }


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const spielMovies = movies.filter((movies) => {
      return movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    });
    return spielMovies.length
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0
    }
    const filterMovie = movies.filter(movie => movie.rate != undefined)
    const rate = filterMovie.reduce((accum, value) => {
        return accum + value.rate
    }, 0)
    const average = rate / movies.length
    return Math.round(average * 100) / 100
}
    

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const drama = movies.filter((movie) => {
        return movie.genre.includes("Drama");
    });

    return ratesAverage(drama);
 }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const year = movies.sort(function(a,b){
        if (a.year > b.year){
            return 1
        }else if(a.year < b.year){
            return -1
        }else{
           return 0
        }
    })
    return year;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    const titles = movies.map(movie => {
        return movie.title})

   const alphaSort = titles.sort();
    return alphaSort.slice(0, 20);
    }
  


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


