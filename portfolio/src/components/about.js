import React from "react";
// import pic from "../data/alexHeadshot.png";

function About() {
  return (
    <div className="About-wrapper">
      <div className="about-box">
        <h1>Hello!</h1>
        {/* <img src={pic} alt="avatar" id="pic" /> */}
        <p>
          My name is Alex. I am a full stack web developer with an interest in
          new product and market development.
          <br />
          <br />
          I've spent most of this past year studying full stack web development
          at{" "}
          <a
            target="blank"
            href="https://lambdaschool.com/courses/full-stack-web-development"
          >
            Lambda School
          </a>
          , an immersive 6-month coding bootcamp, where I've learned frontend
          development, complex state management, API development, backend
          development, and computer science, among other topics.
          <br />
          <br />
          Prior to becoming a web developer, I rose through the ranks as a sales
          and partnerships manager at{" "}
          <a href="https://www.guideline.com" target="blank">
            Guideline
          </a>
          , a top-tier fintech startup based in the Bay Area, where I got my first taste of software development and
          ultimately decided to pursue it as a career.
          <br />
        </p>
      </div>
    </div>
  );
}

export default About;
