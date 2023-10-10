import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import "./header.scss";
import springApi from "../../api/springApi";


const headerNav = [
  {
    display: "Home",
    path: `/`,
  },
  {
    display: "Movies",
    path: `/movie`,
  },
  {
    display: "TV Series",
    path: `/tv`,
  },
  {
    display: "Top 50 movies",
    path: `/top50`,
  }
];

const Header = () => {
  let history = useHistory();
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const [items, setItems] = useState([]);
  const active = headerNav.findIndex((e) => e.path === pathname);

  function logout(e) {
    //confirm do you want to logout
    let out = window.confirm("Do you want to logout?");
    if (out === true) {
      localStorage.removeItem("token");
      history.replace("/");
    } else {
      e.preventDefault();
      return;
    }

  }

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", shrinkHeader);

    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  //call api genres
  useEffect(() => {
    const getGenresList = async () => {
      let response = null;

      response = springApi.getAllCategory();
      response.then((res) => {
        console.log(res);
        setItems(res);
      });

    };
    getGenresList();
  }, []);
  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJV8o6WqlDiYhUlLyRcwKxRvj1S36C6a3_g&usqp=CAU'} alt="logo" />
          {/* <Link to={`/`}>POL</Link> */}
          
          <Link to={`/`}>POL</Link>
        </div>
        
        <ul className="header__nav">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li key={3} className="dropdown">
            <a href="#" class="dropbtn">Category</a>
            <div class="dropdown-content">
              <div className="dropdown-content-flex">
                {items.map((item, index) => (
                  <Link to={"/category/" + item.name + "/" + item.id} key={index}>{item.name}</Link>
                ))}
              </div>
            </div>
          </li>
    
          <li>
            <Link to={`/movie`}>Movies</Link>
          </li>

          <li>
            <a href="" onClick={logout}>Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
