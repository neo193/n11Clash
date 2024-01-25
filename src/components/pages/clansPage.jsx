import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../content/searchbar";
import NavBar from "../content/navbar";
import Footer from "../content/footer";
import ClanDisplay from "../content/clanDisplay";

const ClansPage = () => {
  const [info, setInfo] = useState({});

  const handleSearch = async (clantag) => {
    try {
      const tag = clantag.slice(1);
      console.log(tag);
      const response = await axios.get(
        `http://localhost:3000/api/clan?clantag=${tag}`
      );
      setInfo(response.data);
      console.log("Clan Info:", response.data);
    } catch (error) {
      console.error("Error fetching clan:", error);
    }
  };

  return (
    <>
      <NavBar page="clan" />
      <div className="flex items-center justify-center mt-8 flex-grow">
        <div className="mx-auto">
          <SearchBar displayPage="clan" getClan={handleSearch} />
        </div>
      </div>
      <div className="flex justify-center mb-8 flex-grow">
        <div className="mx-auto">
          <ClanDisplay key={info} clanInfo={info} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClansPage;
