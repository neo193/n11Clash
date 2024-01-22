import React from "react";
import LocationSelect from "../content/locationSelect";
import NavBar from "../content/navbar";
import Footer from "../content/footer";
import TopClanTable from "../content/topClanTable";

const TopClans = () => {
  return (
    <>
      <NavBar page="topclans" />
      <div className="flex justify-center my-8 flex-grow">
        <div className="mx-auto">
          <LocationSelect />
        </div>
      </div>
      <div className="flex justify-center mt-12 mb-8 flex-grow">
        <div className="mx-auto">
          <TopClanTable />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopClans;
