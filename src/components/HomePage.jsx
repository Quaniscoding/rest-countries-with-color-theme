import React, { useEffect, useState } from "react";
import data from "../assets/data.json";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  const [searchInputName, setSearchInputName] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const searchCountries = (searchValue) => {
    setSearchInputName(searchValue);
    if (searchInputName !== "") {
      const filteredCountriesName = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInputName.toLowerCase());
      });
      setFilteredResults(filteredCountriesName);
    } else {
      setFilteredResults(data);
    }
  };
  const searchCountriesByRegions = (searchValue) => {
    setSearchInputName(searchValue);
    if (searchInputName !== "") {
      const filteredRegions = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInputName.toLowerCase());
      });
      setFilteredResults(filteredRegions);
    } else {
      setFilteredResults(data);
    }
  };
  const [loading, setLoading] = useState(false);
  let timeout = null;
  if (timeout != null) {
    clearTimeout(timeout);
  }
  useEffect(() => {
    timeout = setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [loading]);
  return (
    <div className=" md:container container-sm mx-6 md:mx-auto md:max-w-screen-xl min-h-screen">
      <div style={{ height: 50, color: "transparent" }}></div>
      <div className="md:flex items-center justify-between sm:display:block">
        <div className="relative" style={{ width: 300 }}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => searchCountries(e.target.value)}
            id="default-search"
            className="block shadow-lg w-full p-2 pl-10 text-sm dark:text-white border border-none rounded-md  dark:bg-[#2b3945] dark:placeholder:text-white dark:placeholder-[#2b3945] active:border-none focus:border-black"
            placeholder="Search for a country..."
          />
        </div>
        <div className="md:display-none xs:display-block bg-transparent h-[30px]"></div>
        <div className="flex">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="bg-white dark:bg-[#2b3945] shadow-lg focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-gray-700 dark:focus:ring-gray-800 "
          >
            Filter by Region
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  className="block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => {
                    searchCountriesByRegions(`Africa`);
                  }}
                >
                  Africa
                </a>
              </li>
              <li>
                <a
                  className="block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => {
                    searchCountriesByRegions(`America`);
                  }}
                >
                  America
                </a>
              </li>
              <li>
                <a
                  className="block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => {
                    searchCountriesByRegions(`Asia`);
                  }}
                >
                  Asia
                </a>
              </li>
              <li>
                <a
                  className="block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => {
                    searchCountriesByRegions(`Europe`);
                  }}
                >
                  Europe
                </a>
              </li>
              <li>
                <a
                  className="block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => {
                    searchCountriesByRegions(`Oceania`);
                  }}
                >
                  Oceania
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ height: 50, color: "transparent" }}></div>
      <div className="md:grid md:grid-cols-4 md:gap-16 ">
        {searchInputName.length > 1
          ? filteredResults.map((item, index) => {
              return (
                <div
                  key={index}
                  className="max-w-sm mb-6 md:m-0 border rounded-lg shadow-lg border-none dark:bg-[#2b3945] cursor-pointer hover:shadow-black"
                >
                  <a href={`/DetailPage/${item.name}`}>
                    <a>
                      <img
                        className="rounded-t-lg"
                        src={item.flags.png}
                        alt={item.name}
                        style={{ height: 200, width: "100%" }}
                      />
                    </a>
                    <div className="p-5">
                      <a>
                        <h5 className="mb-3 text-base text-left font-bold tracking-tight dark:text-white">
                          {item.name}
                        </h5>
                      </a>
                      <p className="mb-2 text-xs text-left font-semibold dark:text-white">
                        Population :{" "}
                        <span className="dark:text-white font-light">
                          {item.population}
                        </span>
                      </p>
                      <p className="mb-2 text-xs text-left font-semibold dark:text-white">
                        Region :{" "}
                        <span className="dark:text-white font-light">
                          {item.region}
                        </span>
                      </p>
                      <p className="mb-2 text-xs text-left font-semibold dark:text-white">
                        Capital :{" "}
                        <span className="dark:text-white font-light">
                          {item.capital}
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
              );
            })
          : data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="max-w-sm mb-6 md:m-0 border rounded-lg shadow-lg border-none dark:bg-[#2b3945] cursor-pointer hover:shadow-black"
                >
                  <a href={`/DetailPage/${item.name}`}>
                    <a>
                      <img
                        className="rounded-t-lg"
                        src={item.flags.png}
                        alt={item.name}
                        style={{ height: 200, width: "100%" }}
                      />
                    </a>
                    <div className="p-5">
                      <a>
                        <h5 className="mb-3 text-base text-left font-bold tracking-tight dark:text-white">
                          {item.name}
                        </h5>
                      </a>
                      <p className="mb-2 text-xs text-left font-semibold dark:text-white">
                        Population :{" "}
                        <span className="dark:text-white font-light">
                          {item.population}
                        </span>
                      </p>
                      <p className="mb-2 text-xs text-left font-semibold dark:text-white">
                        Region :{" "}
                        <span className="dark:text-white font-light">
                          {item.region}
                        </span>
                      </p>
                      <p className="mb-2 text-xs text-left font-semibold dark:text-white">
                        Capital :{" "}
                        <span className="dark:text-white font-light">
                          {item.capital}
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
              );
            })}
      </div>
    </div>
  );
}
