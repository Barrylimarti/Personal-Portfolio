import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"C/C++"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"HTML/CSS"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"React Js"} progress={"75%"} width={"75%"} />
        <SkillsSection skill={"Node Js"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Python"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Javascript"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"React-Native"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Flask"} progress={"60%"} width={"60%"} />
        <SkillsSection
          skill={"Data, Structures and Algorithms"}
          progress={"90%"}
          width={"90%"}
        />
      </div>

      <Tittle title={"Interests"} span={"Interests"} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={"Data Science"}
          text={
            "I like to work with data a lot and I want to explore this field more."
          }
        />
        <ServicesSection
          image={intelligence}
          title={"Machine Learning"}
          text={
            "I currently don't have much experience with this but I want to learn this."
          }
        />
        <ServicesSection
          image={gamedev}
          title={"Game Development"}
          text={
            "I love games and have been playing a lot since childhood. Want to develop one soon."
          }
        />
      </div>
    </div>
  );
}

export default AboutPage;
