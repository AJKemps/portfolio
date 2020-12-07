import React from 'react';

function About() {
  return (
    <div className="About-wrapper">
      <div className="about-box">
        <h1>Hello!</h1>
        {/* <img src={pic} alt="avatar" id="pic" /> */}
        <p>
          My name is Alex, and I am a full stack web developer with an interest
          in new product and market development.
          <br />
          <br />
          I've spent most of this past year studying full stack web development
          at{' '}
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
          and partnerships manager at{' '}
          <a href="https://www.guideline.com" target="blank">
            Guideline
          </a>{' '}
          (Forbes Fintech 50) , a top-tier fintech startup based in the Bay
          Area, where I got my first taste of software development and
          ultimately decided to pursue it as a career.
          <br />
          <br />
          Being a recent bootcamp grad, and having previously led sales and
          partnership efforts at a high-growth startup, I bring a unique
          combination of skills to the table. I'm looking for a full-stack dev
          position at a company that believes this skillset can be uniquely
          valuable to their team.
          <br />
          <br />
          If that sounds like you, feel free to{' '}
          <a href="mailto:alex.j.kemper@gmail.com"> drop me a note </a>. Always
          happy to chat.
          <br />
          <br />
          Thanks for stopping by!
          <br />
          <br />
        </p>
        <div id="sig-box">
          {/* <p>- Alex Kemper</p> */}
          <div id="pic-div" />
        </div>
      </div>
    </div>
  );
}

export default About;
