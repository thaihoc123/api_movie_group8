import React, { useState, useEffect } from "react";
import MovieCard from "./../movie-card/MovieCard";
import { useParams } from "react-router";
import "./movie-grid.scss";

import springApi from "../../api/springApi";
const MovieGrid2 = (props) => {
    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();


    useEffect(() => {
        const getList = async () => {
            let response = springApi.getMovieByCategory(props.name);
            response.then((res) => {
                console.log(res);
                setItems(res);
            });
        };
        getList();
    }, [props.name]);

 
    return (
        <>
            {/* <div className="section mb-3">
          <MovieSearch category={props.category} keyword={keyword} />
        </div> */}
        <h1 style={{ fontWeight: "bold", fontSize: "3em", marginBottom: "40px", textAlign: "center" }}>{props.name}</h1>
        {
            items.length === 0 ? <h2 style={{ fontWeight: "bold", fontSize: "2em", marginBottom: "40px", textAlign: "center" }}>No movie found</h2>
            :
            
            <div className="movie-grid">
                {items.map((item, index) => ( 
                    <MovieCard key={index} category={"movie"} item={item} />
                ))}
            </div>
        }
            
        
        </>
    );
};

export default MovieGrid2;