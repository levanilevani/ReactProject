import React from "react";
import Products from "./Product";

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark">
        <img src="/assets/mainpage.jpg" className="card-img" alt="bg" height="750px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container ">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text">
            CHECK OUT ALL THE TREND
          </p>
          <p class="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
        </div>
      </div>
      <Products/>
          </div>
  );
}
