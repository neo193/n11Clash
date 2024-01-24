import React, { useState, useEffect } from "react";
import NavBar from "../content/navbar";
import LocationSearchBar from "../content/locationSearch";
import TopClanTable from "../content/topClanTable";
import Footer from "../content/footer";

const TopPlayers = () => {
  const [displayContent, setdisplayContent] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleLocationSelect = async (locationName, locationID) => {
    setValue(locationName);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/players?locationID=${locationID}`
      );
      setdisplayContent(response.data);
      console.log("Top Players Data:", response.data);
    } catch (error) {
      console.error("Error fetching top players:", error);
    }
  };

  return (
    <>
      <NavBar page="topplayers" />
      <div className="flex flex-grow justify-center items-center mt-8">
        <div className="mx-auto">
          <LocationSearchBar
            key={value}
            displayPage={"topplayers"}
            setLocation={handleLocationSelect}
            searchValue={value}
          />
        </div>
      </div>
      <div className="flex justify-center mb-8 flex-grow">
        <div className="mx-auto">
          <TopClanTable displayContent={displayContent} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopPlayers;
