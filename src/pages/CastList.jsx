import React, { useEffect, useState } from "react";

import { useParams } from "react-router";


import springApi from "../api/springApi";

const CastList = (props) => {

  const [casts, setCasts] = useState([]);

  useEffect(() => {
   
    const getCast = async () => {
      // const response = await tmdbApi.credits(category, props.id);
      const response = springApi.getCastByMovie(props.id);
      response.then((res) => {
        // console.log(res);
        setCasts(res);
      });
      // setCasts(response.cast.slice(0, 5));
    };
    getCast();
  }, [props.id]);

  return (
    <div className="casts">
      {casts.map((cast, index) => (
        // <a href='https://www.google.com/search?q=${}' target="_blank">
        <a href={`https://www.google.com/search?q=${cast.name.replace(' ','+')}`} target="_blank">
          <div key={index} className="casts__item">
            <div
              className="casts__item__img"
              style={{
                backgroundImage: `url(${cast.img})`,
              }}
            ></div>
            <p className="casts__item__name">{cast.name}</p>
          </div>
        </a>

      ))}
    </div>
  );
};

export default CastList;
