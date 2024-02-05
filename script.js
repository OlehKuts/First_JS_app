const numberOfFilms = prompt("How many films did you watch already?", "");

let personalMovieDB = {
    count: numberOfFilms,
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
        let markResponse = prompt(markQuestion, '')
        primaryArray = [...primaryArray, filmResponse, markResponse]
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
console.log(personalMovieDB)