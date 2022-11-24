import React from "react";
import "./CountryCard.css";
import { useDispatch } from "react-redux";
import { fetchCountry, removeCountry } from "../../store/slices/country";
import { openModal } from "../../store/slices/modal";

const CountryCard = ({ country }) => {
  const dispatch = useDispatch();
  const getDetails = () => {
    dispatch(removeCountry());
    dispatch(openModal());
    dispatch(fetchCountry(country.name.common));
  };
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
