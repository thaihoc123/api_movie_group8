import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./movie-list.scss";

import { SwiperSlide, Swiper } from "swiper/react";

import MovieCard from "../movie-card/MovieCard";


import springApi from "../../api/springApi";

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      response = springApi.getMovieByGenre(props.type)
      response.then((res) => {
        console.log(res);
        setItems(res);
      });

    };
    getList();
  }, [props.id, props.type]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <MovieCard item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <h2>Movie List</h2> */}
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
