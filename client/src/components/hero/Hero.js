import React from "react";
import { useNavigate } from "react-router";
import "./Hero.scss";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="Hero">
      <div className="hero-content center">
        <h2 className="heading">Exclusive Books and Novels</h2>
        <p className="subheading">
          Exclusive Books, for the Exclusive Bookworms.
        </p>
        <button
          onClick={() => navigate("/category")}
          className="cta btn-primary"
        >
          Explore more
        </button>
      </div>
    </div>
  );
}

export default Hero;
