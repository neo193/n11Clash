import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../content/navbar";
import Footer from "../content/footer";
import TopClanTable from "../content/topClanTable";
import LocationSearchBar from "../content/locationSearch";

const TopClans = () => {
  const [displayContent, setdisplayContent] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleLocationSelect = async (locationName, locationID) => {
    setValue(locationName);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/clans?locationID=${locationID}`
      );
      setdisplayContent(response.data);
      console.log("Top Clans Data:", response.data);
    } catch (error) {
      console.error("Error fetching top clans:", error);
    }
  };
  return (
    <>
      <NavBar page="topclans" />
      <div className="flex flex-grow justify-center items-center mt-8">
        <div className="mx-auto">
          <LocationSearchBar
            key={value}
            displayPage={"topclans"}
            setLocation={handleLocationSelect}
            searchValue={value}
          />
        </div>
      </div>
      <div className="flex justify-center mb-8 flex-grow">
        <div className="mx-auto">
          <TopClanTable displayContent={displayContent} page={"clan"} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopClans;
