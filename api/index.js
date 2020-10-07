//GET COUNTRIES DATA
export const getCountriesData = (dispatch) => {
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
export const getCountryDetail = async (dispatch, country) => {
  let url =
    country === "Worldwide"
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${country}`;

  await fetch(url)
    .then((res) => res.json())
    .then((data) => dispatch({ type: "SET_COUNTRY_DATA", countryData: data }));
};

//SORT COUNTRIES
export const getSortList = async (dispatch) => {
  await fetch("https://disease.sh/v3/covid-19/countries")
    .then((res) => res.json())
    .then((data) => {
      const list = data.sort((a, b) => b.cases - a.cases);
      dispatch({
        type: "SET_SORT_COUNTRIES",
        countries: list,
      });
    });
};
