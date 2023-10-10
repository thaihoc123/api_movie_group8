import React from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";


// import * as Config from "./../../constants/Config";

const MovieCard = (props) => {
  const item = props.item;

  const link =
     "/movie/" + item.id;

  // const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  const bg = item.img;

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        {/* <Button>
          <i className="bx bx-play"></i>
        </Button> */}
        <a href="#">
          
        </a>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
