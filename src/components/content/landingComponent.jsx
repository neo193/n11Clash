import React from "react";

const Landing = () => {
  return (
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Neeyoo’s Clash of Clans Stat Tracker
        </h1>
        <p class="my-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Welcome to n11Clash, your ultimate destination for tracking Clash of
          Clans stats and staying ahead in the game! Whether you’re a seasoned
          clan leader, a dedicated player, or a strategist aiming for the top of
          the leaderboards, we’ve got you covered with comprehensive tools.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="/clan"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Search your Clan
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="https://github.com/neo193"
            class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:bg-gray-700 dark:border-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-900"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;