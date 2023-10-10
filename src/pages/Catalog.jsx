import React from "react";

import MovieGrid from "../components/movie_grid/MovieGrid";


const Catalog = () => {
  

  return (
    <>

      <div className="container" style={{marginTop: "150px"}}>
        <div className="section mb-3">
          <MovieGrid />
          
        </div>
      </div>
    </>
  );
};

export default Catalog;
