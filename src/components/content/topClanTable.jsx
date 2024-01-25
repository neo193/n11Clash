import React from "react";

const TopClanTable = ({ displayContent, page, markers, changePage }) => {
  return (
    <div
      className={`${
        displayContent.length === 0
          ? "hidden relative overflow-x-auto shadow-md sm:rounded-lg"
          : "relative overflow-x-auto shadow-md sm:rounded-lg"
      }`}
    >
      <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Rank
            </th>
            <th scope="col" className="px-6 py-3">
              {`${page === "clan" ? "Clan Name" : "Player Name"}`}
            </th>
            <th scope="col" className="px-6 py-3">
              Trophies
            </th>
            <th
              scope="col"
              className={`${
                page === "clan" ? "hidden px-6 py-3" : "px-6 py-3"
              }`}
            >
              Clan Name
            </th>
          </tr>
        </thead>
        <tbody>
          {displayContent.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.rank}
              </th>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <img
                    className="h-6 w-auto mr-2"
                    src={item.badge}
                    alt="Clan Logo"
                  />
                  <span>{item.name}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <img
                    className="h-6 w-auto mr-2"
                    src="/trophy.png"
                    alt="Trophy"
                  />
                  <span>
                    {page === "clan" ? item.clanPoints : item.trophies}
                  </span>
                </div>
              </td>
              <td
                className={`${
                  page === "clan" ? " hidden px-6 py-4" : "px-6 py-4"
                }`}
              >
                <div className="flex items-center">
                  <span>{item.clan}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-around my-4">
        <button
          disabled={!markers.before}
          onClick={() => changePage("before", markers.before)}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button>
        <button
          disabled={!markers.after}
          onClick={() => changePage("after", markers.after)}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopClanTable;
