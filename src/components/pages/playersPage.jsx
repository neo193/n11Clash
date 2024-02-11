import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../content/searchbar";
import NavBar from "../content/navbar";
import Footer from "../content/footer";
import PlayerDisplay from "../content/playerDisplay";

const PlayersPage = () => {
  const [info, setInfo] = useState({});

  const handleSearch = async (playertag) => {
    try {
      const tag = playertag.slice(1);
      console.log(tag);
      const response = await axios.get(
        `http://localhost:3000/api/player?playertag=${tag}`
      );
      setInfo(response.data);
      console.log("Player Info:", response.data);
    } catch (error) {
      console.error("Error fetching player:", error);
    }
  };

  return (
    <>
      <NavBar page="player" />
      <div className="flex items-center justify-center mt-8 flex-grow">
        <div className="mx-auto">
          <SearchBar displayPage="player" getInfo={handleSearch} />
        </div>
      </div>
      <div className="flex justify-center mb-8 flex-grow">
        <div className="mx-auto">
          <PlayerDisplay key={info} playerInfo={info} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlayersPage;
