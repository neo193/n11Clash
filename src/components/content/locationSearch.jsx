import React, { useState, useEffect } from "react";
import locationsData from "../../../backend/locationsAPI.json";

const LocationSearchBar = ({ displayPage, setLocation, searchValue }) => {
  const [value, setValue] = useState("");

  const newLocationsData = locationsData.filter((location) => {
    if (displayPage === "topplayers") {
      return location.name !== "International";
    }
    return true;
  });

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

  const searchChange = (event) => {
    setValue(event.target.value);
  };

  const getLocationbyID = (locationName) => {
    const locationID = newLocationsData.find(
      (loc) => loc.name === locationName
    );

    locationID ? setLocation(locationName, locationID) : null;
  };

  return (
    <form className="w-96">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          onChange={searchChange}
          id="default-search"
          value={`${searchValue === "" ? value : searchValue}`}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={`${
            displayPage === "topclans"
              ? "Enter Clantag..."
              : "Enter Playertag..."
          }`}
          required
        />
        <div className="absolute z-10 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md">
          <ul>
            {newLocationsData
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const locName = item.name.toLowerCase();

                return (
                  searchTerm &&
                  locName.startsWith(searchTerm) &&
                  locName !== searchTerm
                );
              })
              .slice(0, 5)
              .map((location, index) => (
                <li
                  key={index}
                  onClick={() => setLocation(location.name, location.id)}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-400"
                >
                  {location.name}
                </li>
              ))}
          </ul>
        </div>
        <button
          type="submit"
          onClick={() => getLocationbyID(value)}
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default LocationSearchBar;
