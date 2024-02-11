import React from "react";
import NavBar from "../content/navbar";
import Footer from "../content/footer";
import Landing from "../content/landingComponent";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-grow justify-center items-center">
        <Landing />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
