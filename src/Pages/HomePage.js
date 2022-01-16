import React from "react";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Typical from "react-typical";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          <Typical
            loop={Infinity}
            wrapper="span"
            steps={[
              "Welcome",
              1000,
              "I am Rahul Singh Thakur",
              1000,
              "Full Stack Developer",
              1000,
              "Data Science Enthusiast",
              1000,
            ]}
          />
        </h1>
        <p className="h-sub-text">
          You are here because you want to know me, right?
        </p>
        <br />
        <p className="h-sub-text2">
          Well, I am a pre-final year undergraduate who loves Application
          development.
        </p>
        <br />
        <p className="h-sub-text2" style={{ fontFamily: "monospace" }}>
          <b>Not satisfied?</b>
        </p>
        <br />
        <p className="h-sub-text2">
          Head over to the <b>About</b> page to know me better.
        </p>
        <br />
        <p className="h-sub-text2" style={{ fontFamily: "monospace" }}>
          <b>Not satisfied again?</b>
        </p>
        <br />
        <p className="h-sub-text2">
          Check out my <b>Experiences</b> and <b>Projects</b>.
        </p>
        <p className="h-sub-text3">
          Now, if you want to talk to me, head over to the <b>Contact</b> page.
          <span>{String.fromCodePoint("0x1F604")}</span>
        </p>
        <div className="icons">
          {/* <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link> */}
          <Link to="//github.com/Barrylimarti" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link
            to="//www.linkedin.com/in/rahul-singh-thakur-b92ba4157/"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
