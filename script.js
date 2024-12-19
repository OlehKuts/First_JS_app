
let personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
    while(this.count === "" || isNaN(this.count)){
      this.count = +prompt("How many films did you watch already?", ""); // + allows get a number type
    }},
    getLastFilmAndMark: function (filmQuestion, markQuestion, times) {
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
  },
  checkFilmExperience: function (filmsCount) {
    const response = filmsCount < 10 ? "Not enough films" 
    : filmsCount < 30 ? "The normal count" : filmsCount > 30 ? "You're the movie pro!" : "Error!"
    return response
  },
  showMyDB: function (obj) {
    if (typeof obj.private === "boolean" && !obj.private) console.log(obj)
  },
  writeYourGenres: function () {
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
    genres.forEach((element, index) => {
      console.log(`The favorite genre #${index + 1} - ${element}`)
    });
    return genres
  },
  toggleVisibleMyDB: function () {
    this.private = !this.private
  }
}
personalMovieDB.start();
personalMovieDB.movies = personalMovieDB.getLastFilmAndMark("Which film was you watching last time?", "Set mark from 1 to 10...", 1);
personalMovieDB.genres = personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB);
