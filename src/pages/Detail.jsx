
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import React, { useEffect,  useState } from "react";
import "./detail.scss";
import CastList from "./CastList";
import springApi from "../api/springApi";
import Comment from "../components/comments/comment";
const Detail = () => {
  var { category, id } = useParams();
  // console.log(category, id);
  const [item, setItem] = useState(null);
  const [categorys, setCategorys] = useState(null);
  const [videoName, setVideoName] = useState('');
  useEffect(() => {
  
    const getDetail = async () => {
      console.log('getDetail');
      // const response = await springApi.getDetail(id);
      const response = springApi.getDetail(id)
      response.then((res) => {
        console.log(res);
        setItem(res);
        setVideoName(res.title + " trailer");
      });
    };
    getDetail();
  }, [category, id]);

  useEffect(() => {
  
    const getCategory = async () => {
      // const response = await springApi.getDetail(id);
      const response = springApi.getCategoryByMovie(id)
      response.then((res) => {
        console.log(res);
        // setItem(res);
        setCategorys(res);

      });

    };
    getCategory();
  }, [id]);

  return (
    <>
      {item && (
        <>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <Link to={{
                pathname: "/watch/" + item.id,
                state: {
                  videoName: item.title,
                  link: item.link,
                },
              }} className="back-btn" >
                <div
                  className="movie-content__poster__img"
                  style={{
                    backgroundImage: `url(${item.img
                      })`,
                  }}
                ></div>
              </Link>
            </div>

            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {categorys &&
                  categorys.map((category, index) => (
                    <Link to={"/category/" + category.name + "/" + category.id} key={index} className="genres__item">
                      {category.name}
                    </Link>
                  ))}
              </div>
              <p className="overview">{item.description}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>

                <CastList id={item.id} />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="section mb-3">
              {/* <VideoList id={item.id} />
                   */}
              {videoName ? (
                <div className="video">
                  <div className="video__title">
                    <h2>{videoName}</h2>
                  </div>
                  <iframe
                    // src={`https://www.youtube.com/embed/${videoLink}`}
                    src={item.trailer}
                    height={800}
                    width="100%"
                    title="video"
                  ></iframe>
                </div>
              ) : (<h2 style={{ fontSize: "30px", textAlign: "center" }}>No Trailer</h2>)
              }

            </div>

          </div>

          <Comment id={item.id} />
        </>
      )}
    </>
  );
}

export default Detail;