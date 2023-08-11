import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/data.json";
import "./css/index.css";
export default function DetailPage() {
  const param = useParams();
  const dataCountry = data.find((dt) => dt.name === param.name);
  const borders = dataCountry.borders;
  var dataBorders = [];
  for (let i = 1; i < borders?.length; i++) {
    let dataBordersCountries = data.filter(
      (data) => data.alpha3Code == borders[i]
    );
    dataBorders.push(dataBordersCountries);
  }
  const [loading, setLoading] = useState(false);
  let timeout = null;
  if (timeout != null) {
    clearTimeout(timeout);
  }
  useEffect(() => {
    timeout = setTimeout(() => {
      setLoading(true);
    }, 1000);
  });
  return (
    <>
      {loading ? (
        <div className="md:container container-sm mx-6 md:mx-auto md:max-w-screen-xl min-h-screen m-0 ">
          <div style={{ height: 50, color: "transparent" }}></div>
          <div className="flex justify-start">
            <a
              href="/HomePage"
              className="text-md shadow-lg font-medium text-center dark:bg-[#2b3945] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <button>
                <i className="fa-solid fa-arrow-left pr-2 dark:text-white" />
                Back
              </button>
            </a>
          </div>
          <div style={{ height: 50, color: "transparent" }}></div>
          <div className="md:flex items-start">
            <img
              src={dataCountry.flags.svg}
              alt={dataCountry.name}
              className="md:min-w-[500px] md:min-h-[350px] md:max-w-[500px] md:max-h-[350px]"
              loading="lazy"
            />
            <div className="md:pl-[150px] pt-[30px]">
              <p className="text-3xl font-bold text-left pb-4">
                {dataCountry.name}
              </p>
              <div className="md:flex text-xs">
                <div>
                  <p className="text-left pb-1 pt-2 ">
                    Native Name : <span>{dataCountry.nativeName}</span>
                  </p>
                  <p className="text-left pb-1 pt-2">
                    Population : <span>{dataCountry.population}</span>
                  </p>
                  <p className="text-left pb-1 pt-2">
                    Region : <span>{dataCountry.region}</span>
                  </p>
                  <p className="text-left pb-1 pt-2">
                    Sub region : <span>{dataCountry.subregion}</span>
                  </p>
                  <p className="text-left pb-1 pt-2">
                    Capital : <span>{dataCountry.capital}</span>
                  </p>
                </div>
                <div className="md:pl-[100px]">
                  <p className="text-left pb-1 pt-2">
                    Top Level Domain : <span>{dataCountry.topLevelDomain}</span>
                  </p>
                  <p className="text-left pb-1 pt-2">
                    Currencies :{" "}
                    <span>
                      {dataCountry?.currencies.map((item) => {
                        return item.name;
                      })}
                    </span>
                  </p>
                  <p className="text-left pb-2 pt-2">
                    Languages :{" "}
                    <span>
                      {dataCountry.languages.map((item) => {
                        return item.name;
                      })}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center pt-10">
                <p className="w-32 text-left">Border Countries:</p>
                <div className=" grid md:grid-cols-3 grid-cols-2 gap-0">
                  {dataBorders.map((item) => {
                    return item.map((item) => {
                      return (
                        <a
                          href={`${item.name}`}
                          className="bg-white dark:bg-[#2b3945] shadow-lg border-red-500 px-3 py-2 text-xs text-center hover:bg-none font-thin rounded-lg mr-2 mb-2 dark:hover:bg-gray-900 "
                        >
                          <button className="border-red-500 ">
                            {item.name}
                          </button>
                        </a>
                      );
                    });
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black min-h-screen flex items-center justify-center">
          <span className="loaderDetailPage"></span>
        </div>
      )}
    </>
  );
}
