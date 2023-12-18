import React from "react";
import "./HomeMiddle.css";
import aboutimg from "../../images/IMG2.jpg";


function HomeMiddle() {
  return (
    <div className="middle">
      {/* <div className="background-scroller">
      <div className="scrolling-text">
        Infinite Focus Creation
      </div>
    </div> */}
      <div className="middleSection">
        <div className="leftAbout">
          <img src={aboutimg} alt="notwork" />
        </div>
        <div className="rightAbout">
          <h4>Photography Studio</h4>

          <h1>
            Welcome to Infinite Focus Creation - Where Moments Become Memories!
          </h1>
          <p>
            Explore the magic of storytelling at Infinite Focus Creation. We are
            not just photographers; we are memory architects, crafting timeless
            tales from your special moments.
          </p>
          <br />
          <h2>Why Choose Infinite Focus Creation?</h2>
          <br />
          <h3>Artistic Vision:</h3>
          <p>
            Experience a fresh perspective with our sincere and artistic
            approach to wedding photography.
          </p>
          <h3>Passionate Team:</h3>
          <p>
            Despite being newcomers, our passion knows no bounds, and our
            commitment is unmatched.
          </p>
          <h3>Affordable Excellence:</h3>
          <p>Indulge in top-notch services without breaking the bank.</p>
          <br />
          <p>
            At Infinite Focus Creation, each click is a chapter, and every frame
            is a celebration. Join us in crafting your unique love story!
          </p>
        </div>
      </div>

   
    </div>
  );
}

export default HomeMiddle;
