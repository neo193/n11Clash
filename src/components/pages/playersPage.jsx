import React from "react";
import SearchBar from "../content/searchbar";
import NavBar from "../content/navbar";
import Footer from "../content/footer";
import PlayerDisplay from "../content/playerDisplay";

const PlayersPage = () => {
  return (
    <>
      <NavBar page="player" />
      <div className="flex justify-center my-8 flex-grow">
        <div className="mx-auto">
          <SearchBar displayPage="player" />
        </div>
      </div>
      <div className="flex justify-center my-8 flex-grow">
        <div className="flex justify-center w-full mx-auto">
          <PlayerDisplay />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlayersPage;
