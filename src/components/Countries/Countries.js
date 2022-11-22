import React, { useEffect } from "react";
import { fetchCountries } from "../../store/slices/country";
import { useDispatch, useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import "./Countries.css";

const Countries = () => {
  const {
    list: countries,
    loading,
    error,
  } = useSelector((store) => store.countries);
  const dispatch = useDispatch();
  // const fetchCountries = async () => {
  //   // await axios
  //   //   .get("https://restcountries.com/v3.1/all")
  //   //   .then((response) => {
  //   //     setCountries(response.data);
  //   //     setIsLoading(false);
  //   //   })
  //   //   .catch((err) => {
  //   //     setError(err.message);
  //   //     setIsLoading(false);
  //   //   });
  //   try {
  //     const response = await axios.get("https://restcountries.com/v3.1/all");
  //     setCountries(response.data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setIsLoading(false);
  //   }
  // };
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
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
      <div className="country-cards-container">
        {countries &&
          countries.map((country, index) => (
            <CountryCard country={country} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Countries;
