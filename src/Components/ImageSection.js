import React from "react";
import about from "../img/about2.jpg";

function ImageSection() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1tB3jDnhE7XBfGOFePMx-71-87OrCSvqq/view?usp=sharing"
    );
  };
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Rahul Singh Thakur</span>
        </h4>
        <p className="about-text">
          I have explored fields like Web-development, Mobile app-development
          and Data Mining. I am well versed with the MERN stack and python
          programming.Also, I have a good command over DSA along with OOPs
          concepts.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Branch</p>
            <p>College</p>
          </div>
          <div className="right-section">
            <p>: Rahul Singh Thakur</p>
            <p>: 20</p>
            <p>: Indian</p>
            <p>: English, Hindi</p>
            <p>: Electrical Engineering</p>
            <p>
              : Indian Institute of Technology (Indian School of Mines), Dhanbad
            </p>
          </div>
        </div>
        <button className="btn" onClick={handleClick}>
          Download Cv
        </button>
      </div>
    </div>
  );
}

export default ImageSection;
