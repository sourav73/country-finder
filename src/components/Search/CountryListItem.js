import React from "react";
import { useDispatch } from "react-redux";
import { fetchCountry, removeCountry } from "../../store/slices/country";
import { openModal } from "../../store/slices/modal";
import "./CountryListItem.css";

const CountryListItem = ({ country }) => {
  const dispatch = useDispatch();
  const { name, flags } = country;
  const modalOpener = () => {
    dispatch(removeCountry());
    dispatch(openModal());
    dispatch(fetchCountry(name.common));
  };
  return (
    <div className="country-item">
      <div className="country-image">
        <img src={flags.png} alt={name.common} />
      </div>
      <button onClick={modalOpener}>{name.common}</button>
    </div>
  );
};

export default CountryListItem;
