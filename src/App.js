import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadBar from "./Components/HeadBar";
import Body from "./Components/Body";
import MovieCard from "./Components/MovieCard";
import HomePage from "./Components/HomePage/HomePage";
import { Route } from "react-router-dom";
import MovieDetails from "./Components/HomePage/MovieDetails";
// import HeadBar from "./Components/HeadBar";
// import Body from "./Components/Body";
// import MovieCard from "./Components/MovieCard";
// import HomePage from "./Components/HomePage/HomePage";
// import TheatreListOfChosenMovie from "./Components/TheatreShowOnMovieSelect/TheatreListOfChosenMovie";
// import DateAndTime from "./Components/TheatreShowOnMovieSelect/DateAndTime";
// import TheatreDetailsAndMovieTime from "./Components/TheatreShowOnMovieSelect/TheatreDetailsAndMovieTime";
import TheatreList from "./Components/TheatreShowOnMovieSelect/TheatreList";

function App() {
  // const [signInVisible, changeSignInVisible] = useState(true);
  // const [registerVisible, changeRegisterVisible] = useState(false);
  // const showSignIn = () => {
  //   changeSignInVisible(true);
  //   changeRegisterVisible(false);
  // };
  // const showRegister = () => {
  //   changeSignInVisible(false);
  //   changeRegisterVisible(true);
  // };

  return (
    <div>
      <Route path="/" exact>
        <HomePage />
      </Route>
      {/* <HeadBar showSignIn={showSignIn} showRegister={showRegister} />
      <Body signIn={signInVisible} register={registerVisible} /> */}

      <Route path="/movie-details/:movieId">
        <MovieDetails />
      </Route>
      {/* <HomePage /> */}
      {/* <HeadBar showSignIn={showSignIn} showRegister={showRegister} />
      <Body signIn={signInVisible} register={registerVisible} /> */}
      {/* <TheatreListOfChosenMovie movie_id={1}/> */}
      {/* <DateAndTime/> */}
      {/* <TheatreDetailsAndMovieTime />
      <TheatreDetailsAndMovieTime />
      <TheatreDetailsAndMovieTime />
      <TheatreDetailsAndMovieTime />
      <TheatreDetailsAndMovieTime /> */}
      <TheatreList movie_id={4} />
    </div>
  );
}

export default App;
