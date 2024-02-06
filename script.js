const numberOfFilms = prompt("How many films did you watch already?", "");

let personalMovieDB = {
    count: Number(numberOfFilms),
    movies: {},
    actors: {},
    genres: [],
    private: true
}
console.log(personalMovieDB)
const getLastFilmAndMark = (filmQuestion, markQuestion, times) => {
    let primaryArray = []
    for (let index = 0; index < times; index++) {
        let filmResponse = prompt(filmQuestion, '');
        let markResponse = prompt(markQuestion, '');
        if (filmResponse && filmResponse.length < 50 && markResponse && Number(markResponse) >= 0 && Number(markResponse) <= 10) {
          primaryArray = [...primaryArray, filmResponse, Number(markResponse)]
        }
       else{
        index--;
       }
    }
    // const primary =  ["Man", "2.2", "Woman", "3.1"];
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
console.log(personalMovieDB)
alert(checkFilmExperience(personalMovieDB.count))