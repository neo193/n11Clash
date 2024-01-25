import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../content/navbar";
import LocationSearchBar from "../content/locationSearch";
import TopClanTable from "../content/topClanTable";
import Footer from "../content/footer";

const TopPlayers = () => {
  const [displayContent, setdisplayContent] = useState([]);
  const [value, setValue] = useState("");
  const [markers, setMarkers] = useState({});
  const [locationID, setLocationID] = useState(0);

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleLocationSelect = async (locationName, locationID) => {
    setValue(locationName);
    setLocationID(locationID);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/players?locationID=${locationID}`
      );
      setMarkers(response.data[response.data.length - 1]);
      response.data.pop();
      setdisplayContent(response.data);
      console.log("Top Players Data:", response.data);
    } catch (error) {
      console.error("Error fetching top players:", error);
    }
  };

  const handlePaging = async (dir, marker) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/players?locationID=${locationID}&direction=${dir}&marker=${marker}`
      );
      setMarkers(response.data[response.data.length - 1]);
      response.data.pop();
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
          <TopClanTable
            key={markers}
            displayContent={displayContent}
            page={"player"}
            markers={markers}
            changePage={handlePaging}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopPlayers;
