import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/slices/modal";
import "./Modal.css";

const Modal = ({ country }) => {
  const dispatch = useDispatch();
  const { modalIsOpen } = useSelector((store) => store.modal);
  const {
    name,
    flags,
    currencies,
    capital,
    population,
    continents,
    timezones,
    languages,
  } = country.details;
  const hasCountry = JSON.stringify(country.details) === "{}" ? false : true;
  return (
    <div className={`modal-container ${modalIsOpen ? "show" : ""}`}>
      <div className="modal-content">
        <button className="close-modal" onClick={() => dispatch(closeModal())}>
          <div className="bar-1"></div>
          <div className="bar-2"></div>
        </button>
        {country.loading && (
          <p className="loading">
            Fetching Details <img src="./images/loading.gif" alt="loading" />
          </p>
        )}
        {hasCountry && (
          <>
            <div className="country-img">
              <img src={flags.png} alt={name.common} />
            </div>
            <div className="country-details">
              <p className="title">Country: {name.common}</p>
              <p className="region">Region: {continents[0]}</p>
              <p className="capital">{capital && `Capital: ${capital[0]}`}</p>
              <p className="language">
                Language: {Object.values(languages)[0]}
              </p>
              <p className="currency">
                Currency: {Object.values(currencies)[0].name}
              </p>
              <p className="population">Population: {population}</p>
              <p className="timezone">Timezone: {timezones[0]}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
