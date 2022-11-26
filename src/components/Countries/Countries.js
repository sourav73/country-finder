import React, { useEffect, useState } from "react";
import { fetchCountries } from "../../store/slices/country";
import { useDispatch, useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import "./Countries.css";

const Countries = () => {
  const {
    list: countries,
    loading,
    error,
    filterBy,
  } = useSelector((store) => store.countries);
  const dispatch = useDispatch();
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const sortedCountry = [...filteredCountries];
  sortedCountry.sort((countryA, countryB) => {
    const nameA = countryA.name.common.toUpperCase(); // ignore upper and lowercase
    const nameB = countryB.name.common.toUpperCase(); // ignore upper and lowercase
    // sort in ascending order
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // sort in descending order
    // if (nameA > nameB) {
    //   return -1;
    // }
    // if (nameA < nameB) {
    //   return 1;
    // }
    return 0;
  });
  // console.log(sortedCountry);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  useEffect(() => {
    setFilteredCountries(
      filterBy !== "All"
        ? countries.filter((country) => country.name.common[0] === filterBy)
        : countries
    );
  }, [filterBy, countries]);
  return (
    <div className="countries">
      <div className="loading-error">
        {loading && (
          <div className="loading">
            <p>Fetching data </p>
            <img src="./images/loading.gif" alt="loading" />
          </div>
        )}
        {error && <p>{error}</p>}
      </div>

      {sortedCountry && (
        <>
          {!loading && (
            <div className="filter-value">
              {filterBy === "All" ? (
                <p>All Countries</p>
              ) : (
                <p>Countries that starts with {filterBy}</p>
              )}
            </div>
          )}
          <div className="country-cards-container">
            {sortedCountry.map((country, index) => (
              <CountryCard country={country} key={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Countries;
