import React, { useEffect } from "react";
import "./CountryCard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry, removeCountry } from "../../store/slices/country";

const CountryCard = ({ country }) => {
  const dispatch = useDispatch();
  const { country: singleCountry } = useSelector((store) => store.countries);
  const { loading, error, details } = singleCountry;
  useEffect(() => {
    dispatch(removeCountry());
    dispatch(fetchCountry(country.name.common));
  }, []);
  const getDetails = () => {};
  return (
    <div className="country-card">
      <div className="flag">
        <img src={country.flags.png} alt={country.name.common} />
      </div>
      <div className="details">
        <p>{country.name.common}</p>
        <button onClick={getDetails}>View Details</button>
      </div>
    </div>
  );
};

export default CountryCard;
