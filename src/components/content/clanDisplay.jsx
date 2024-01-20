import React from "react";

const ClanDisplay = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="flex justify-center ">
        <img
          className="p-8 rounded-t-lg"
          src="https://api-assets.clashofclans.com/badges/200/KBtwIToS85C-c3ROYqXdkB7DkmMY4zUP3BjJ8IDK1Qw.png"
          alt="Clan Badge"
        />
      </a>
      <div className="px-5 pb-5">
        <a>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            FRIENDS FOREVER
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <h5 className="text-base italic tracking-tight text-gray-900 dark:text-white">
              ▫️Official 💎F.W.A💎• RCS Verified • ▫️Hardcore CWL, Clan Raids &
              Trophy Pushing ▫️Be active or get KICKED ▫️COOK AND DONATE when
              you request ▫️Discord: http://tiny.cc/TeamTrinity ▫️Enjoy your
              Stay
            </h5>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            44/50
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
