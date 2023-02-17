import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import requests from "../config/Requests";
import axios from "axios";
import QuickView from "./QuickView";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false);

  function handlePopup() {
    popup ? setPopup(false) : setPopup(true);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      // on prend un film aléatoire parmis les resultats obtenu de la requete
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  // tronc le texte de la description du film
  function truncateText(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  // image du film
  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <p className="banner__description">
          {truncateText(movie?.overview, 100)}
        </p>
        {movie.id && (
          <div className="banner__buttons">
            <Link to={`/video/${movie?.id}`}>
              <button className="banner__button banner__button--play">
                <PlayArrowIcon /> Lecture
              </button>
            </Link>
            <button className="banner__button" onClick={handlePopup}>
              <HelpOutlineIcon />
              Plus d'infos
            </button>
          </div>
        )}
      </div>
      <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        popupStatus={popup}
        popup={handlePopup}
      />
    </header>
  );
}

export default Banner;
