import React, { useState, useEffect } from "react";
import buildChartData from "../utils/buildChartData";
export const DataContext = React.createContext();

export const DataProvider = (props) => {
  const [countryISO, setCountryISO] = useState("global");
  const [countries, setCountries] = useState([]);
  const [currentCountryData, setCurrentCountryData] = useState({});
  const [globalHistory, setGlobalHistory] = useState({});

  //GET ALL COUNTRIES
  const getCountriesData = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  };

  //GET HISTORY OF CASES
  const getHistory = async () => {
    let url = "https://disease.sh/v3/covid-19/historical/all?lastdays=120";
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGlobalHistory(data);
      });
  };

  useEffect(() => {
    getCountriesData();
    getHistory();
  }, []);

  return (
    <DataContext.Provider
      value={{
        countryISO,
        setCountryISO,
        countries,
        setCountries,
        currentCountryData,
        setCurrentCountryData,
        globalHistory,
        setGlobalHistory,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
