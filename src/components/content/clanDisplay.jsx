import React from "react";

const ClanDisplay = ({ clanInfo }) => {
  if (clanInfo.description) {
    var descriptionLines = clanInfo.description.split("\n");
  }

  return (
    <div
      className={`${
        Object.keys(clanInfo).length === 0
          ? "hidden w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          : "w-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      }`}
    >
      <a className="flex justify-center ">
        <img
          className="p-8 rounded-t-lg"
          src={clanInfo.badge}
          alt="Clan Badge"
        />
      </a>
      <div className="px-5 pb-5">
        <a>
          <h3 className="flex justify-center mb-8 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {clanInfo.name}
          </h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <h5 className="text-base italic tracking-tight text-gray-900 dark:text-white">
              {descriptionLines?.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </h5>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {clanInfo.members}/50
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Members
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClanDisplay;
