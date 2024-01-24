import React from "react";
import SearchBar from "../content/searchbar";
import NavBar from "../content/navbar";
import Footer from "../content/footer";
import ClanDisplay from "../content/clanDisplay";

const ClansPage = () => {
  return (
    <>
      <NavBar page="clan" />
      <div className="flex items-center justify-center mt-8 flex-grow">
        <div className="mx-auto">
          <SearchBar displayPage="clan" />
        </div>
      </div>
      <div className="flex justify-center mb-8 flex-grow">
        <div className="mx-auto">
          <ClanDisplay />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClansPage;
