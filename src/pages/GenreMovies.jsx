import React from "react";

import { useParams } from "react-router";
import MovieGrid from "../components/movie_grid/MovieGrid";
import MovieGrid2 from "../components/movie_grid/MovieGrid2";




const GenreMovies = () => {
    const { name,id } = useParams();

  return (
    <>
      {/* <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader> */}

      <div className="container" style={{marginTop: "150px"}}>
        <div className="section mb-3">
          <MovieGrid2 name={name} id={id}/>
        </div>
      </div>
      
    </>
  );
};

export default GenreMovies;
