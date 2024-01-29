import React from "react";
// import Footer from "../component/Footer";
// import Header from "../component/Header";
// import Navbar from "../component/Navbar";
import lamp from "../assets/images/lamp.svg";
import armchair from "../assets/images/armchair.svg"

import "./Home.css";
import Layout from "../component/Layout";


const Home = () => {
  return (
    <Layout>
      <div className="Home-img">
        <img className="lamp" src={lamp} alt="lamp"></img>
        <div className="text-part">
          <p>Best Furniture For Your Castle....</p>
          <div className="text-heading">
            <p>New Furniture Collection Trends in 2020</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </span>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="armchair">
          <img src={armchair} alt="armchair"></img>
        </div>
        <div></div>
      </div>
      <div className="Featured-Product">
      <p>Featured Products</p>
         
         </div>
    </Layout>
  );
};

export default Home;
