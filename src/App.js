import "swiper/swiper.min.css";
import "./App.scss";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Catalog from "./pages/Catalog";
import GenreMovies from "./pages/GenreMovies";
import Watch from "./pages/Watch";


function App() {
  return (
    <BrowserRouter>
      <Route
        render={() => {
          return localStorage.getItem("token") ? (
            <Redirect to="/" />
          ) : (
            <Login />
          );
        }}
      />

      <Route
        //login route

        render={(props) => {
          return localStorage.getItem("token") ?
            <>
              <Header {...props} />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  path={`/movie/search/:keyword`}
                  component={Catalog}
                />
                <Route path="/category/:name/:id" component={GenreMovies} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/movie" component={Catalog} />
                <Route path="/watch/:link" component={Watch} />
              </Switch>

              <Footer />
            </>
            :
            <Redirect to="/" />
        }}
      />

    </BrowserRouter>
  );
}

export default App;
