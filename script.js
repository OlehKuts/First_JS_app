let numberOfFilms; // only variable declaration
function appStart () {

  while(!numberOfFilms || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("How many films did you watch already?", ""); // + allows get a number type
  }
}
appStart();
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}
console.log(personalMovieDB)
const getLastFilmAndMark = (filmQuestion, markQuestion, times) => {
    let primaryArray = []
    for (let index = 0; index < times; index++) {
        let filmResponse = prompt(filmQuestion, '').trim();
        let markResponse = +prompt(markQuestion, '');
        if (filmResponse && filmResponse.length < 50 && markResponse && Number(markResponse) >= 0 && Number(markResponse) <= 10) {
          primaryArray = [...primaryArray, filmResponse, markResponse]
        }
       else{
        index--;
       }
    }
    const res = primaryArray.reduce((acc,current)=>{
        if(acc[acc.length-1].length == 2){
          acc.push([]);
        }
        acc[acc.length-1].push(current);
        return acc;
      }, [[]]);
    const testObj = res.reduce((object, value, index) => {
        return {...object, [value[0]]: value[1]};
      }, {});
    return testObj
}
personalMovieDB = {...personalMovieDB,
movies: getLastFilmAndMark("Which film was you watching last time?", "Set mark from 1 to 10...", 2)
}
function checkFilmExperience (filmsCount) {
  const response = filmsCount < 10 ? "Not enough films" 
  : filmsCount < 30 ? "The normal count" : filmsCount > 30 ? "You're the movie pro!" : "Error!"
  return response
} 
function showMyDB (obj) {
  if (typeof obj.private === "boolean" && !obj.private) console.log(obj)
}
function writeYourGenres () {
  let genres = []
  for (let index = 0; index < 3; index++) {
      let genreResponse = prompt(`Your favorite genre #${index+1}`, '').trim();
      if (genreResponse && genreResponse.length < 50 ) {
        genres = [...genres, genreResponse]
      }
     else{
      index--;
     }
  }
  return genres
}
showMyDB(personalMovieDB)
alert(checkFilmExperience(personalMovieDB.count))
personalMovieDB.genres = writeYourGenres();
console.log(personalMovieDB)