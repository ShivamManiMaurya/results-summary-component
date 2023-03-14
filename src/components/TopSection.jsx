import React from "react";

function TopSection() {
  return (
    <div className="top-div">
      <h4>Your Result</h4>
      <div className="circle-div">
        <div className="content-div">
          <h1 className="cir-heading">76</h1>
          <p className="cir-para">of 100</p>
        </div>
      </div>
      <h2 className="great">Great</h2>
      <p className="great-para">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}


export default TopSection;