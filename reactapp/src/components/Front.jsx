import React from "react";

export default function Front() {
  function handleRateClick(event) {
    const clicked = event.target;
    const ratings = document.querySelectorAll(".rate");
    const current_ratings = document.querySelector(".info");

    ratings.forEach((rating) => {
      rating.classList.remove("selected");
    });

    clicked.classList.add("selected");
    current_ratings.innerHTML = `${clicked.id} out of 5`;
  }

  function handleSubmit() {
    document.querySelector("#page-1").classList.add("z-index");
  }

  return (
    <div id="page-1" className="page-1">
      <div className="container">
        <img src="./icon-star.svg" alt="" />
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div id="numbers" className="numbers">
          <span id="1" className="1 rate" onClick={handleRateClick}>
            1
          </span>
          <span id="2" className="2 rate" onClick={handleRateClick}>
            2
          </span>
          <span id="3" className="3 rate" onClick={handleRateClick}>
            3
          </span>
          <span id="4" className="4 rate" onClick={handleRateClick}>
            4
          </span>
          <span id="5" className="5 rate" onClick={handleRateClick}>
            5
          </span>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
