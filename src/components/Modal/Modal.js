import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/slices/modal";
import "./Modal.css";

const Modal = ({ country }) => {
  const dispatch = useDispatch();
  const { modalIsOpen } = useSelector((store) => store.modal);
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
              <img
                src={country.details.flags.png}
                alt={country.details.name.common}
              />
            </div>
            <div className="country-details">
              <p className="title">{country.details.name.common}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
