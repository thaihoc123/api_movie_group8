import React from "react";


import MovieList from "../components/movie-list/MovieList";


const Home = () => {
  return (
    <>

      <div className="container" style={{marginTop: "9rem"}}>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
          
          </div>
          <MovieList category={"movie"} type={"trending"} />
        </div>   
        
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Popular Movies</h2>
          
          </div>
          <MovieList category={"movie"} type={"popular"} />
        </div> 

         

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movie</h2>
           
          </div>
          <MovieList category={"movie"} type={"top rated"} />
        </div> 

      
      </div>
    </>
  );
};

export default Home;
