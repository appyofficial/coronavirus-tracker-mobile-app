import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { DataProvider } from "./provider/DataProvider";
import AppContainer from "./navigations/AppContainer";

//api
//GET COUNTRIES DATA
const getCountriesData = (dispatch) => {
  fetch("https://disease.sh/v3/covid-19/countries")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "SET_COUNTRIES",
        countries: data,
      });
    });
};

//GET SELECTED COUNTRY DETAIL
const getCountryDetail = async (dispatch, country) => {
  let url =
    country === "Worldwide"
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${country}`;

  await fetch(url)
    .then((res) => res.json())
    .then((data) => dispatch({ type: "SET_COUNTRY_DATA", countryData: data }));
};

export default function App() {
  return (
    <DataProvider>
      <AppContainer />
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  cardLeft: { flexDirection: "row", alignItems: "center", flex: 0.5 },
  cardTitle: { flex: 1, fontWeight: "700", fontSize: 16, color: "gray" },
  cardImage: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 8,
  },
  cardCases: {
    fontSize: 16,
    fontWeight: "700",
    flex: 0.3,
    textAlign: "right",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "#fff",
  },
});
