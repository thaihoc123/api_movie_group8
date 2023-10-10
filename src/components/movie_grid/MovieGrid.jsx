import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "./../movie-card/MovieCard";
import { useHistory, useParams } from "react-router";
import "./movie-grid.scss";
import Button, { OutlineButton } from "../button/Button";
import Input from "../input/Input";
import springApi from "../../api/springApi";
const MovieGrid = (props) => {
  const [items, setItems] = useState([]);

  const { keyword } = useParams();


  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined || keyword === "") {
        const params = {};
        response = springApi.getAll()
        response.then((res) => {
          console.log(res);
          setItems(res);
        });

      } else {
     
        response = springApi.getMovieByKeyword(keyword)
        response.then((res) => {
          console.log(res);
          setItems(res);
        });
      }
   
    };
    getList();
  }, [keyword]);



  return (
    <>

      <div className="section mb-3">
        <MovieSearch keyword={keyword} />
      </div>


      {
        items.length == 0 ?
          <h1 style={{ textAlign: "center" }}>No Movie</h1>
          :
          <div className="movie-grid">
            {items.map((item, index) => (
              <MovieCard key={index} item={item} />
            ))}
          </div>
      }
  
    </>
  );
};


const MovieSearch = (props) => {
  const history = useHistory();

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const goToSearch = useCallback(() => {

    if (keyword.trim().length > 0) {
      history.push(
        `/movie/search/${keyword}`
      );
    }else{
      history.push('/movie');
    }
  }, [keyword, props.category, history]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [goToSearch]);

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={goToSearch}>
        Search
      </Button>
    </div>
  );
};

export default MovieGrid;