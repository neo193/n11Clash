import React from "react";

const PlayerDisplay = () => {
  return (
    <div className="w-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center my-8">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/THImages/TH14.png"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Neeyoo
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          #2Y8C89CVR
        </span>
        <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          210
        </span>
        <span className="text-md mt-4 text-gray-500 dark:text-gray-400">
          Member
        </span>
        <span className="text-md mt-1 text-gray-500 dark:text-gray-400">
          FRIENDS FOREVER
        </span>
        <div className="flex w-40 mx-auto mt-4 md:mt-6">
          <a
            href="#"
            className="inline-flex justify-center w-full items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Army
          </a>
        </div>
        <div className="flex w-40 mx-auto mt-4 md:mt-6">
          <a
            href="#"
            className="inline-flex justify-center w-full items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Clan
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlayerDisplay;
