const number0fFilms = prompt ('Скільки ти фільмів подивився?', '');

const personalMovieDB = {
  count: number0fFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один з останіх фільмів?', '')
const b = prompt('На скільки оцінете фільм?', '')
const c = prompt('Один з останіх фільмів?', '')
const d = prompt('На скільки оцінете фільм?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
