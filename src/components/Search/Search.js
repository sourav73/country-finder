import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CountryListItem from "./CountryListItem";
import "./Search.css";

const Search = () => {
  const { list: countries } = useSelector((store) => store.countries);
  const [searchedCountry, setSearchedCountry] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getSerchedCountries();
  };
  const getSerchedCountries = useCallback(
    (query) => {
      if (query === "") {
        setSearchedCountry([]);
      } else {
        setSearchedCountry(
          countries.filter((country) =>
            country.name.common
              .toLocaleLowerCase()
              .includes(searchInput.toLocaleLowerCase())
          )
        );
      }
    },
    [countries, searchInput]
  );
  useEffect(() => {
    getSerchedCountries(searchInput);
  }, [getSerchedCountries, searchInput]);
  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="country"
          placeholder="Search a country"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75 17.27C8.26664 17.27 6.8166 16.8301 5.58323 16.006C4.34986 15.1819 3.38856 14.0106 2.82091 12.6401C2.25325 11.2697 2.10472 9.76167 2.39411 8.30682C2.6835 6.85196 3.39781 5.51559 4.4467 4.46669C5.4956 3.4178 6.83197 2.70349 8.28683 2.4141C9.74168 2.12471 11.2497 2.27324 12.6201 2.8409C13.9906 3.40855 15.1619 4.36985 15.986 5.60322C16.8101 6.83658 17.25 8.28663 17.25 9.76999C17.25 11.7591 16.4598 13.6668 15.0533 15.0733C13.6468 16.4798 11.7391 17.27 9.75 17.27ZM9.75 3.76999C8.56332 3.76999 7.40328 4.12189 6.41658 4.78117C5.42989 5.44046 4.66085 6.37753 4.20673 7.47389C3.7526 8.57025 3.63378 9.77665 3.86529 10.9405C4.0968 12.1044 4.66825 13.1735 5.50736 14.0126C6.34648 14.8517 7.41558 15.4232 8.57946 15.6547C9.74335 15.8862 10.9497 15.7674 12.0461 15.3133C13.1425 14.8591 14.0795 14.0901 14.7388 13.1034C15.3981 12.1167 15.75 10.9567 15.75 9.76999C15.75 8.17869 15.1179 6.65257 13.9926 5.52735C12.8674 4.40213 11.3413 3.76999 9.75 3.76999Z"
              fill="black"
            />
            <path
              d="M21 21.77C20.9015 21.7704 20.8038 21.7512 20.7128 21.7134C20.6218 21.6757 20.5392 21.6201 20.47 21.55L14 15.07C13.9258 15.002 13.8661 14.9197 13.8243 14.8282C13.7826 14.7366 13.7597 14.6375 13.7571 14.5369C13.7544 14.4363 13.772 14.3362 13.8089 14.2426C13.8457 14.1489 13.901 14.0636 13.9715 13.9918C14.042 13.92 14.1262 13.8631 14.2191 13.8245C14.3121 13.7859 14.4118 13.7664 14.5125 13.7671C14.6131 13.7679 14.7126 13.7889 14.8049 13.8289C14.8973 13.8689 14.9806 13.9271 15.05 14L21.53 20.48C21.6705 20.6206 21.7493 20.8112 21.7493 21.01C21.7493 21.2087 21.6705 21.3994 21.53 21.54C21.4616 21.6119 21.3794 21.6693 21.2884 21.7088C21.1973 21.7484 21.0993 21.7691 21 21.77Z"
              fill="black"
            />
          </svg>
        </button>
      </form>
      <div className={`search-content ${searchInput !== "" ? "show" : ""}`}>
        <button className="close-search" onClick={() => setSearchInput("")}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.22676 4.22676C4.5291 3.92441 5.01929 3.92441 5.32163 4.22676L12 10.9051L18.6784 4.22676C18.9807 3.92441 19.4709 3.92441 19.7732 4.22676C20.0756 4.5291 20.0756 5.01929 19.7732 5.32163L13.0949 12L19.7732 18.6784C20.0756 18.9807 20.0756 19.4709 19.7732 19.7732C19.4709 20.0756 18.9807 20.0756 18.6784 19.7732L12 13.0949L5.32163 19.7732C5.01929 20.0756 4.5291 20.0756 4.22676 19.7732C3.92441 19.4709 3.92441 18.9807 4.22676 18.6784L10.9051 12L4.22676 5.32163C3.92441 5.01929 3.92441 4.5291 4.22676 4.22676Z"
              fill="#fff"
            />
          </svg>
        </button>
        {searchInput !== "" && searchedCountry.length === 0 && (
          <p className="no-result">No countries Found</p>
        )}
        {searchedCountry.map((country, index) => (
          <CountryListItem key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Search;
