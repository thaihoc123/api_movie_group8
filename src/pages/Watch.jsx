import React from "react";

import "./watch.scss"
const Watch = (props) => {
    console.log(props.location.state);

    return (
        <div className="mb-3 container" style={{margin: "130px 50px"}}>
            <h2 style={{fontSize: "30px", marginBottom: "30px"}}>Movie: {props.location.state.videoName}</h2>
              <iframe className="iframe-video"
                    // src={`https://www.youtube.com/embed/${videoLink}`}
                    src={props.location.state.link}
                    height={800}
                    width="100%"
                    title="video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
        </div>
    );
};

export default Watch;