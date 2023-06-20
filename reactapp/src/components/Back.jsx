import React from "react";

export default function Back() {
  return (
    <div className="page-2">
      <div className="container">
        <img src="/illustration-thank-you.svg" className="thank-you" alt="" />
        <span className="info">You selected 0 out of 5</span>
        <h2 className="h2">Thank you!</h2>
        <p className="p">
          We appreciate you taking the time to give a rating. If you ever need
          more support,don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
